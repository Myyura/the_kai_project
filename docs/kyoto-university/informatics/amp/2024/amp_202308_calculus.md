---
sidebar_label: "2023年8月実施 微積分"
tags:
  - Kyoto-University
  - Mathematics.Calculus.Double-Integral
  - Mathematics.Calculus.Definite-Integral
  - Mathematics.Calculus.Indefinite-Integral
  - Mathematics.Calculus.Local-Extrema
---
# 京都大学 情報学研究科 数理工学専攻 2023年8月実施 微積分

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[大学公表の原題](https://www.i.kyoto-u.ac.jp/assets/pdf/admission/examarchive/km_2023_amp.pdf)

以下の問いに答えよ.

(i) 極限値 $\lim_{n\to\infty} \sqrt[n]{n}$ を求めよ.

(ii) $\mathbb{R}$ 上で定義された関数 $f(x) = e^{-\sqrt{3}x} \cos x$ の極値をすべて求めよ.

(iii) $a, b$ を $a > b$ を満たす正数とする. $\mathbb{R}^2$ 上で定義された関数 $f(x,y) = (ax^2+by^2)e^{-(x^2+y^2)}$ の極値をすべて求めよ.

(iv) 次の不定積分を求めよ.

$$
\int (\log x)^2 dx
$$

(v) $D = \{(x,y) \in \mathbb{R}^2 \mid x^2 + y^2 \leq 2x\}$ として、次の2重積分を求めよ.

$$
\iint_D \sqrt{x} dxdy
$$

### 题目描述

回答下列问题。

1. 求极限

$$
\lim_{n\to\infty}\sqrt[n]{n}.
$$

2. 对定义在 $\mathbb{R}$ 上的函数

$$
f(x)=e^{-\sqrt3x}\cos x,
$$

求它的全部极值。
3. 设 $a>b>0$。对定义在 $\mathbb{R}^2$ 上的函数

$$
f(x,y)
=(ax^2+by^2)e^{-(x^2+y^2)},
$$

求它的全部极值。
4. 求不定积分

$$
\int(\log x)^2\,dx.
$$

5. 定义

$$
D=
\{(x,y)\in\mathbb{R}^2
\mid x^2+y^2\leq2x\}.
$$

计算二重积分

$$
\iint_D\sqrt{x}\,dx\,dy.
$$

## **Kai**

(i) Let $y = n^{\frac{1}{n}}$ . Then $\ln y = \frac{1}{n} \ln n$ . As $n \to \infty$ , $\frac{\ln n}{n} \to 0$ . Therefore, $\ln y \to 0$ , and $y \to e^0 = 1$ . Thus, $\lim_{n \to \infty} \sqrt[n]{n} = 1$ .

(ii) $f(x)=e^{-\sqrt3x}\cos x$ とすると

$$
f'(x)=-e^{-\sqrt3x}(\sqrt3\cos x+\sin x),
$$

従って停留点は

$$
x_n=-\frac{\pi}{3}+n\pi\qquad(n\in\mathbb Z)
$$

である。二階導関数は

$$
f''(x)=2e^{-\sqrt3x}(\cos x+\sqrt3\sin x).
$$

$x=x_n$ では

$$
f''(x_n)=2(-1)^{n+1}e^{-\sqrt3x_n}.
$$

従って、 $n$ が偶数のとき極大、 $n$ が奇数のとき極小である。対応する極値は

$$
\boxed{
f(x_n)=\frac{(-1)^n}{2}
\exp\left(\frac{\pi}{\sqrt3}-n\pi\sqrt3\right)
}.
$$

$$
\begin{aligned}
& \text{(iii)} \hspace{40em} \\[6pt]
& \text{関数 } f(x,y) = (ax^2 + by^2)e^{-(x^2+y^2)} \text{ （ただし } a > b > 0 \text{） の極値を求める。} \\[6pt]
& \text{1. 停留点の算出} \\
& \text{勾配ベクトル } \nabla f = (f_x, f_y) = (0, 0) \text{ を解く：} \\
& \quad \cdot \; f_x = 2x e^{-(x^2+y^2)} [a - (ax^2+by^2)] = 0 \\
& \quad \cdot \; f_y = 2y e^{-(x^2+y^2)} [b - (ax^2+by^2)] = 0 \\
& \text{これより、次の 5 つの停留点が得られる：} (0,0), (\pm 1, 0), (0, \pm 1) \text{。} \\[6pt]
& \text{2. 各点における極値の判定} \\
& \quad \cdot \; \text{点 } (0,0) \text{ において：} f(0,0) = 0 \text{。 } a, b > 0 \text{ より、これは極小値である。} \\
& \quad \cdot \; \text{点 } (\pm 1, 0) \text{ において：} f(\pm 1, 0) = a/e \text{。 } a > b \text{ より、これらは極大値である。} \\
& \quad \cdot \; \text{点 } (0, \pm 1) \text{ において：} f(0, \pm 1) = b/e \text{。 ヘッセ行列による判定の結果、} \\
& \text{これらは鞍点（サドルポイント）であることがわかる。} \\[6pt]
& \text{結論：} \\
& \text{極大値 } a/e \text{ （点 } (\pm 1, 0) \text{ において）} \\
& \text{極小値 } 0 \text{ （点 } (0,0) \text{ において）}
\end{aligned}
$$

(iv) $\int (\log x)^2 dx = x(\log x)^2 - 2 \int \log x dx = x(\log x)^2 - 2(x\log x - x) + C = x(\log x)^2 - 2x\log x + 2x + C$ .
$\int (\log x)^2 dx = x(\log x)^2 - 2x\log x + 2x + C$

(v) $D = \{(x,y) \in \mathbb{R}^2 \mid x^2 + y^2 \leq 2x\}$ . $x^2 + y^2 \leq 2x \implies (x-1)^2 + y^2 \leq 1$ . This is a circle centered at $(1,0)$ with radius $1$ .
$\iint_D \sqrt{x} dxdy$ .
Let $x = r\cos\theta$ , $y = r\sin\theta$ . Then $(r\cos\theta - 1)^2 + (r\sin\theta)^2 \leq 1$ , $r^2\cos^2\theta - 2r\cos\theta + 1 + r^2\sin^2\theta \leq 1$ , $r^2 - 2r\cos\theta \leq 0$ , $r \leq 2\cos\theta$ . $-\frac{\pi}{2} \leq \theta \leq \frac{\pi}{2}$ .
$\iint_D \sqrt{x} dxdy = \int_{-\pi/2}^{\pi/2} \int_0^{2\cos\theta} \sqrt{r\cos\theta} r dr d\theta = \int_{-\pi/2}^{\pi/2} \sqrt{\cos\theta} \int_0^{2\cos\theta} r^{3/2} dr d\theta = \int_{-\pi/2}^{\pi/2} \sqrt{\cos\theta} \frac{2}{5} r^{5/2} |_0^{2\cos\theta} d\theta = \frac{2}{5} \int_{-\pi/2}^{\pi/2} \sqrt{\cos\theta} (2\cos\theta)^{5/2} d\theta = \frac{2}{5} 2^{5/2} \int_{-\pi/2}^{\pi/2} \cos^3\theta d\theta = \frac{2^{7/2}}{5} \int_{-\pi/2}^{\pi/2} \cos\theta (1-\sin^2\theta) d\theta = \frac{2^{7/2}}{5} [\sin\theta - \frac{\sin^3\theta}{3}]_{-\pi/2}^{\pi/2} = \frac{2^{7/2}}{5} [(1 - \frac{1}{3}) - (-1 + \frac{1}{3})] = \frac{2^{7/2}}{5} [\frac{2}{3} + \frac{2}{3}] = \frac{2^{7/2}}{5} \cdot \frac{4}{3} = \frac{2^{11/2}}{15} = \frac{8\sqrt{2} \cdot 2 \cdot 2}{15} = \frac{32\sqrt{2}}{15}$
