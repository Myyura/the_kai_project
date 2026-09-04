---
sidebar_label: "2020年8月実施 専門 第5問"
tags:
  - Tokyo-University
  - Electrical-Electronic.Signal-Processing.Continuous-Time-Fourier-Transform
  - Electrical-Electronic.Signal-Processing.Fourier-Conjugate-Symmetry-and-Modulation
  - Electrical-Electronic.Signal-Processing.Convolution-Theorem
  - Mathematics.Fourier-Analysis.Fourier-Transform-Differentiation-and-Time-Multiplication
---

# 東京大学 情報理工学系研究科 電子情報学専攻 2020年8月実施 専門 第5問

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

フーリエ変換に関する以下の問いに答えよ。

$$
x(t)=\begin{cases}
1&-1\le t<0,\\
-2&0\le t<2,\\
0&\text{それ以外},
\end{cases}\qquad
f(t)=\begin{cases}
E&|t|\le\tau/2,\\
0&|t|>\tau/2
\end{cases}
$$

とする。ただし、$\tau>0,\ E>0$ である。$a(t)*b(t)$ は、$2$ つの信号 $a(t)$ と $b(t)$ の畳み込み積分を意味する。

(1) $x(t)=x_o(t)+x_e(t)$ を満たす $x_o(t)$ と $x_e(t)$ のグラフを図示せよ。ただし、$x_o(-t)=-x_o(t),\ x_e(-t)=x_e(t)$ である。

(2) $x_o(t)$ のフーリエ変換を $X_o(\omega)$ とする。$X_o(\omega)$ の実部 $\operatorname{Re}(X_o(\omega))$ を求めよ。

(3) $f(t)$ のフーリエ変換 $F(\omega)$ を求めよ。さらに、$F(\omega)=0$ となるすべての $\omega$ を求めよ。

(4) $f_2(t)=f(t)*f(t)$ とする。$f_2(t)$ のグラフを図示せよ。

(5) $f_3(t)=f_2(t)*f(t)$ とする。(3) で求めた $F(\omega)$ を用いて、$f_2(t),f_3(t)$ にそれぞれ対応するフーリエ変換 $F_2(\omega),F_3(\omega)$ を求めよ。

(6) $g(t)=\dfrac{d}{dt}f_2(t)$ とする。$g(t)$ のグラフを図示し、$f(t)$ を用いて数式で表せ。

(7) $g(t)$ のフーリエ変換 $G(\omega)$ を求めよ。

## **Kai**

### (1)

奇成分と偶成分は

$$
\boxed{x_o(t)=\frac{x(t)-x(-t)}2,\qquad
x_e(t)=\frac{x(t)+x(-t)}2}
$$

で与えられる。$t>0$ では

$$
x_o(t)=\begin{cases}-3/2&0<t\le1,\\-1&1<t<2,\\0&t\ge2,\end{cases}
\qquad x_o(0)=0
$$

であり、$t<0$ は奇対称に延長する。また、

$$
x_e(t)=\begin{cases}
-2&t=0,\\
-1/2&0<|t|\le1,\\
-1&1<|t|<2,\\
0&|t|\ge2.
\end{cases}
$$

図の白丸はその値を含まず、塗りつぶした丸はその値を含むことを表す。

![上：奇成分 x_o(t)。下：偶成分 x_e(t)。端点と t=0 の値も示す。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-university/IST/denshi/q5_2021_odd_even.svg)

### (2)

$x_o(t)$ は実奇関数、$\cos\omega t$ は偶関数なので、

$$
\boxed{\operatorname{Re}X_o(\omega)
=\int_{-\infty}^{\infty}x_o(t)\cos\omega t\,dt=0}.
$$

### (3)

フーリエ変換を $F(\omega)=\int_{-\infty}^{\infty}f(t)e^{-j\omega t}\,dt$ とすると、

$$
\boxed{F(\omega)=E\int_{-\tau/2}^{\tau/2}e^{-j\omega t}\,dt
=\frac{2E\sin(\omega\tau/2)}{\omega}},\qquad
\boxed{F(0)=E\tau}.
$$

よって、すべての零点は

$$
\boxed{\omega=\frac{2\pi k}{\tau}\quad(k\in\mathbb Z,\ k\ne0)}.
$$

### (4)

二つの幅 $\tau$ の矩形が重なる区間の長さは、$|t|\le\tau$ で $\tau-|t|$ だから、

$$
\boxed{f_2(t)=\begin{cases}E^2(\tau-|t|)&|t|\le\tau,\\0&|t|>\tau.\end{cases}}
$$

下図の上段に示す。

### (5)

畳み込み定理より、

$$
\boxed{F_2(\omega)=F(\omega)^2,\qquad
F_3(\omega)=F(\omega)^3}.
$$

### (6)

$$
g(t)=\begin{cases}
E^2&-\tau<t<0,\\
-E^2&0<t<\tau,\\
0&|t|>\tau.
\end{cases}
$$

折れ点 $t=-\tau,0,\tau$ を除いて、

$$
\boxed{g(t)=E\left[f\left(t+\frac\tau2\right)-f\left(t-\frac\tau2\right)\right]}.
$$

![上：高さ E²τ、底辺 [-τ,τ] の三角波 f₂(t)。下：区間 (-τ,0) で E²、(0,τ) で -E² となる g(t)。](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo-university/IST/denshi/q5_2021_convolution.svg)

### (7)

時間微分のフーリエ変換は $j\omega$ 倍なので、

$$
\boxed{G(\omega)=j\omega F_2(\omega)
=j\omega F(\omega)^2
=\frac{4jE^2\sin^2(\omega\tau/2)}{\omega}},\qquad
\boxed{G(0)=0}.
$$
