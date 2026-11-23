import { useEffect, useRef } from "react";

/**
 * Animated 16-bit pixel-art "Misty Mountain Lake & Pine Ridge" banner
 * rendered on a low-res offscreen-scaled canvas with pixelated crispness.
 */
export function NaturePixelBanner() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const W = 240;
    const H = 80;
    canvas.width = W;
    canvas.height = H;

    let rafId = 0;
    let tick = 0;

    // Deterministic stars
    const stars = [
      { x: 18, y: 8, phase: 0.2 },
      { x: 44, y: 14, phase: 1.4 },
      { x: 78, y: 6, phase: 2.8 },
      { x: 112, y: 11, phase: 0.9 },
      { x: 148, y: 7, phase: 3.5 },
      { x: 186, y: 13, phase: 2.1 },
      { x: 214, y: 9, phase: 4.2 },
      { x: 228, y: 17, phase: 1.8 },
    ];

    // Fireflies near shore & pines
    const fireflies = [
      { x: 32, y: 46, speed: 0.03, phase: 0.5, color: "#25b5d6" },
      { x: 64, y: 50, speed: 0.025, phase: 2.1, color: "#f5d08a" },
      { x: 142, y: 48, speed: 0.035, phase: 1.2, color: "#25b5d6" },
      { x: 192, y: 44, speed: 0.028, phase: 3.7, color: "#f5d08a" },
      { x: 216, y: 52, speed: 0.032, phase: 4.9, color: "#25b5d6" },
    ];

    const drawPine = (px: number, baseY: number, height: number, color: string) => {
      ctx.fillStyle = color;
      const tiers = Math.floor(height / 3);
      for (let t = 0; t < tiers; t++) {
        const y = baseY - height + t * 3;
        const halfW = Math.max(1, Math.floor((t + 1) * 0.8));
        ctx.fillRect(px - halfW, y, halfW * 2 + 1, 2);
      }
      ctx.fillRect(px, baseY - 2, 1, 2);
    };

    const render = () => {
      tick += 1;
      ctx.imageSmoothingEnabled = false;

      // 1. Twilight Sky Bands (banded pixel-art gradient)
      const skyBands = [
        { y: 0, h: 12, color: "#12171b" },
        { y: 12, h: 11, color: "#192329" },
        { y: 23, h: 10, color: "#223238" },
        { y: 33, h: 9, color: "#2f4547" },
        { y: 42, h: 8, color: "#455a54" },
      ];
      for (const band of skyBands) {
        ctx.fillStyle = band.color;
        ctx.fillRect(0, band.y, W, band.h);
      }

      // Subtle warm horizon glow behind distant saddle
      ctx.fillStyle = "rgba(214, 168, 108, 0.22)";
      ctx.fillRect(92, 38, 68, 10);
      ctx.fillStyle = "rgba(245, 208, 138, 0.28)";
      ctx.fillRect(108, 42, 36, 6);

      // 2. Twinkling Stars
      for (const s of stars) {
        const alpha = 0.35 + 0.55 * Math.abs(Math.sin(tick * 0.03 + s.phase));
        ctx.fillStyle = `rgba(233, 233, 231, ${alpha.toFixed(2)})`;
        ctx.fillRect(s.x, s.y, 1, 1);
      }

      // 3. Distant Volcanic Mountain Ridge
      ctx.fillStyle = "#222e30";
      for (let x = 0; x < W; x++) {
        const h1 =
          Math.sin(x * 0.035) * 6 +
          Math.cos(x * 0.08 + 1.2) * 3 +
          (x > 145 && x < 195 ? 11 - Math.abs(x - 170) * 0.44 : 0) +
          (x > 40 && x < 92 ? 8 - Math.abs(x - 66) * 0.31 : 0);
        const topY = Math.floor(38 - h1);
        ctx.fillRect(x, topY, 1, 50 - topY);
      }

      // 4. Midground Pine & Misty Ridge
      ctx.fillStyle = "#182321";
      for (let x = 0; x < W; x++) {
        const h2 = Math.sin(x * 0.05 + 2.4) * 4 + Math.cos(x * 0.11) * 2;
        const topY = Math.floor(44 - h2);
        ctx.fillRect(x, topY, 1, 51 - topY);
      }

      // Pine silhouettes along the far shore
      const pinePositions = [
        { x: 14, y: 47, h: 12 },
        { x: 22, y: 48, h: 15 },
        { x: 31, y: 48, h: 10 },
        { x: 174, y: 47, h: 13 },
        { x: 184, y: 46, h: 17 },
        { x: 194, y: 47, h: 14 },
        { x: 205, y: 48, h: 11 },
        { x: 218, y: 47, h: 16 },
        { x: 229, y: 48, h: 12 },
      ];
      for (const p of pinePositions) {
        drawPine(p.x, p.y, p.h, "#111a18");
      }

      // 5. Drifting Pixel Mist Band over water/ridge
      const mistOffset = Math.floor(Math.sin(tick * 0.012) * 14);
      ctx.fillStyle = "rgba(233, 233, 231, 0.10)";
      ctx.fillRect(20 + mistOffset, 45, 76, 2);
      ctx.fillRect(130 - mistOffset, 46, 82, 2);

      // 6. Calm Mirror Lake (y: 49..80)
      ctx.fillStyle = "#162124";
      ctx.fillRect(0, 49, W, 31);
      ctx.fillStyle = "#1d2b2e";
      ctx.fillRect(0, 50, W, 10);

      // Shimmering water reflections
      for (let i = 0; i < 14; i++) {
        const ry = 52 + i * 2;
        const shift = Math.floor(Math.sin(tick * 0.04 + i) * 3);
        const rw = 18 - (i % 5) * 2;
        ctx.fillStyle =
          i % 3 === 0
            ? "rgba(245, 208, 138, 0.16)"
            : "rgba(37, 181, 214, 0.14)";
        ctx.fillRect(114 + shift - Math.floor(rw / 2), ry, rw, 1);
      }

      // 7. Foreground Mossy Lakeside Rocks (bottom-left & center-left)
      ctx.fillStyle = "#121413";
      ctx.fillRect(0, 62, 106, 18);
      ctx.fillRect(20, 58, 74, 6);
      ctx.fillRect(42, 55, 36, 4);
      // Moss highlight pixels
      ctx.fillStyle = "#2d3b2f";
      ctx.fillRect(24, 58, 18, 2);
      ctx.fillRect(44, 55, 28, 2);
      ctx.fillRect(6, 62, 22, 2);

      // 8. Lone Hiker with Backpack standing on rock looking at lake (x ~ 56, y ~ 44..55)
      // Legs
      ctx.fillStyle = "#1e242b";
      ctx.fillRect(55, 51, 2, 4);
      ctx.fillRect(58, 51, 2, 4);
      // Jacket
      ctx.fillStyle = "#3b4f48";
      ctx.fillRect(54, 46, 6, 5);
      // Backpack (earthy amber/brown)
      ctx.fillStyle = "#8c5b32";
      ctx.fillRect(52, 46, 2, 5);
      // Head & hair
      ctx.fillStyle = "#d9b79c";
      ctx.fillRect(56, 43, 3, 3);
      ctx.fillStyle = "#171716";
      ctx.fillRect(55, 42, 4, 2);

      // 9. Animated Fireflies
      for (const f of fireflies) {
        const fy = f.y + Math.sin(tick * f.speed + f.phase) * 3;
        const fx = f.x + Math.cos(tick * f.speed * 0.7 + f.phase) * 2;
        const pulse = 0.4 + 0.6 * Math.abs(Math.sin(tick * 0.05 + f.phase));
        ctx.fillStyle = f.color;
        ctx.globalAlpha = pulse;
        ctx.fillRect(Math.round(fx), Math.round(fy), 1, 1);
        ctx.globalAlpha = 1;
      }

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-label="Animated pixel-art misty mountain lake and pine ridge"
      className="h-full w-full object-cover"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
