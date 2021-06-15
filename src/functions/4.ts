const f = (x: number, y: number): number => {
  return 1 - Math.cos(x) * Math.cos(y);
};

export const res1: { x: number; y: number }[] = [];
export const res2: { x: number; y: number }[] = [];

const h = 0.2;
let X0 = 3;
let Y0 = 6;

for (let i = 1; i < 100; i += 1) {
  const X1 = X0 - h * Math.sin(X0) * Math.cos(Y0);
  const Y1 = Y0 - h * Math.cos(X0) * Math.sin(Y0);
  res1.push({
    x: 600 + Math.trunc((X0 * 200) / Math.PI),
    y: 400 + Math.trunc((Y0 * 200) / Math.PI),
  });
  res1.push({
    x: 600 + Math.trunc((X1 * 200) / Math.PI),
    y: 400 + Math.trunc((Y1 * 200) / Math.PI),
  });
  X0 = X1;
  Y0 = Y1;
}

X0 = -1;
Y0 = -2;

for (let i = 1; i < 100; i += 1) {
  const X1 = X0 - f(X0 + h / 2, Y0) + f(X0 - h / 2, Y0);
  const Y1 = Y0 - f(X0, Y0 + h / 2) + f(X0, Y0 - h / 2);
  res2.push({
    x: 600 + Math.trunc((X0 * 200) / Math.PI),
    y: 400 + Math.trunc((Y0 * 200) / Math.PI),
  });
  res2.push({
    x: 600 + Math.trunc((X1 * 200) / Math.PI),
    y: 400 + Math.trunc((Y1 * 200) / Math.PI),
  });
  X0 = X1;
  Y0 = Y1;
}
