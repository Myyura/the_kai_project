---
sidebar_label: "2019年度 数学 第2問"
sidebar_position: 14
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2019年度 数学 第2問

## **Author**
[etsurin](https://zhuanlan.zhihu.com/p/561992447)

## **Description**
実数値関数 $u(x,t)$ が $-\infty < x < \infty$, $t \geq 0$ で定義されている。ここで、$x$ と $t$ は独立である。偏微分方程式

$$
\begin{align}
\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2} \tag{2.1}
\end{align}
$$

の解を初期条件

$$
\begin{align}
&u(x,0) = \exp(-ax^2) \tag{2.2} \\
&\frac{\partial u}{\partial t}(x,0) = 0 \tag{2.3}
\end{align}
$$

の下で求める。ただし、$a, c$ は正の実数とする。
また、$i$ を虚数単位とする。以下の問いに答えよ。

(1) 次の式を複素積分を用いて計算せよ。

$$
\int_{-\infty}^{\infty} \exp\left( -a(x + id)^2 \right) dx
$$

ただし、$d$ は実数である。また、以下の式を用いてもよい。

$$
\int_{-\infty}^{\infty} \exp(-x^2)dx = \sqrt{\pi}
$$

(2) $u(x,t)$ の $x$ に関するフーリエ変換 $U(k,t)$ を

$$
U(k,t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} u(x,t) \exp(-ikx)dx
$$

と定義する。
ここで、$x$ に関する積分と $t$ に関する微分の順序の交換が可能であると仮定してよい。
さらに、$u(x,t)$ と $\frac{\partial u}{\partial x}(x,t)$ は任意の $t$ に対して $x \to \pm \infty$ のとき $0$ に収束するものとする。

- (i) $u(x,t)$ が式 (2.1) を満たすとき、$U(k,t)$ が従う偏微分方程式を求めよ。
- (ii) (i) の解は式 (2.3) の初期条件のもとで、$k$ を変数とする関数 $F(k)$ を用いて以下のように表せることを示せ。

$$
U(k,t) = F(k) \cos(kct)
$$

- (iii) さらに、式 (2.2) の初期条件のもとで $F(k)$ を求め、$U(k,t)$ を与えよ。設問 (1) の結果を用いてもよい。

(3) 設問 (2) で得られた $U(k,t)$ のフーリエ逆変換を計算することにより、$u(x,t)$ を求めよ。ただし、フーリエ逆変換は次式で定義される。

$$
u(x,t) = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{\infty} U(k,t) \exp(ikx)dk
$$


## **Kai**
### (1)

$$
\begin{aligned}
\int_{-\infty}^{\infty} e^{-a(x+id)^2} dx &= \int_{-\infty}^{\infty} e^{-ax^2} dx \\
&= \frac{1}{\sqrt{a}} \int_{-\infty}^{\infty} e^{-(\sqrt{a}x)^2} d(\sqrt{a}x) \\
&= \sqrt{\frac{\pi}{a}}
\end{aligned}
$$

### (2)
#### (i)

$$
\begin{aligned}
\mathcal{F} \left [ \frac{\partial u(x,t)}{\partial x} \right] &= \frac{1}{\sqrt{2 \pi}} \int_{-\infty}^{\infty} e^{-ikx} d(u(x,t)) \qquad (\text{对 } x \text{ 微分}) \\
&= \frac{1}{\sqrt{2 \pi}} (e^{ikx} u(x,t) \bigg|_{-\infty}^{\infty} - \int_{-\infty}^{\infty} u(x,t)(-ik)e^{-ikx} dx) \\
&(\text{由于 } x \to \pm \infty \text{ 时 } u(x,t)=0, \text{ 左项为 } 0) \\
&= ikU(k,t)
\end{aligned}
$$

由于 $x \to \pm \infty$ 时 $\frac{\partial u(x,t)}{\partial x} = 0$, 同理可得

$$
\mathcal{F}\left[ \frac{\partial^2 u(x,t)}{\partial x^2} \right] = -k^2 U(k,t)
$$

$$
\mathcal{F}\left[ \frac{\partial^2 u(x,t)}{\partial t^2} \right] = \frac{\partial^2 \mathcal{F[u(x,t)]}}{\partial t^2} = \frac{\partial^2 U(k,t)}{\partial t^2}
$$

满足的微分方程式为

$$
\frac{\partial^2 U(k,t)}{\partial t^2} = -k^2 c^2 U(k,t)
$$

#### (ii)
$U(k,t)$ 有形式

$$
U(k,t) = G(k) \sin (kct) + F(k) \cos (kct)
$$

由初值条件 $\frac{\partial u(x,0)}{\partial} = 0$

$$
\frac{\partial U(k,t)}{\partial t} \bigg |_{t=0} = kcG(k) \cos (kct) - kcF(k) \sin(kct) \bigg|_{t=0} = 0
$$

得到 $G(k) = 0$, 因此

$$
U(k,t) = F(k) \cos(kct)
$$

#### (iii)
由初值条件 $u(x,0) = e^{-ax^2}$

$$
\begin{aligned}
F(k) = U(k, 0) &= \mathcal{F}[u(x, 0)] \\
&= \frac{1}{\sqrt{2 \pi}} \int_{-\infty}^{\infty} e^{-ax^2} e^{-ikx} dx \\
&= \frac{1}{\sqrt{2 \pi}} \int_{-\infty}^{\infty} \exp (-a(x + \frac{ik}{2a})^2) \exp (-\frac{k^2}{4a}) dx \\
&= \frac{1}{\sqrt{2 \pi}} \sqrt{\frac{\pi}{a}} \exp (-\frac{k^2}{4a}) \\
&= \frac{1}{\sqrt{2a}}\exp (-\frac{k^2}{4a})
\end{aligned}
$$

### (3)

$$
U(k,t) = \frac{1}{\sqrt{2a}} \exp(-\frac{k^2}{4a}) \cos (kct)
$$

$$
\begin{aligned}
u(x,t) &= \frac{1}{\sqrt{2 \pi}} \frac{1}{\sqrt{2a}} \int_{-\infty}^{\infty} \exp(-\frac{k^2}{4a}) \exp (ikx) \frac{\exp(ikct) + \exp(-ikct)}{2} dk \\
&= \frac{1}{4\sqrt{\pi a}} \int_{-\infty}^{\infty} \exp(-\frac{k^2}{4a}) \left( \exp(i(x-ct)k) + \exp(i(x+ct)k) \right) dk \\
&= \frac{1}{4\sqrt{\pi a}} \int_{-\infty}^{\infty} \exp \left( -\frac{1}{4a} (k^2- i4a(x + ct)k) \right) dk + \frac{1}{4\sqrt{\pi a}} \int_{-\infty}^{\infty} \exp \left( -\frac{1}{4a} (k^2- i4a(x - ct)k) \right) dk \\
&= I_1 + I_2
\end{aligned}
$$

$$
\begin{aligned}
I_1 &= \frac{1}{4\sqrt{\pi a}} \int_{-\infty}^{\infty} \exp \left( -\frac{1}{4a} (k^2- i4a(x + ct)k) \right) dk \\
&= \frac{1}{4\sqrt{\pi a}} \int_{-\infty}^{\infty} \exp \left( -\frac{1}{4a} (k-2i(x+ct)a)^2 \right) \exp \left( -\frac{1}{4a} (4(x+ct)^2a^2) \right) dk \\
&= \frac{1}{4\sqrt{\pi a}} \exp \left( -\frac{1}{4a} (4(x+ct)^2 a^2) \right) \sqrt{4a \pi} \\
&= \frac{1}{2} e^{-a(x+ct)^2}
\end{aligned}
$$

同理 $I_2 = \frac{1}{2} e^{-a(x-ct)^2}$

$$
u(x,t) = \frac{1}{2} e^{-a(x+ct)^2} + \frac{1}{2} e^{-a(x-ct)^2}
$$