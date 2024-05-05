---
comments: false
description: 東京大学 大学院 工学系研究科 2021年度 数学3
keywords: Tokyo-University, 2021
---

## **Source**
[東京大学 大学院 工学系研究科 2021年度 数学3 (主に複素関数論)](https://www.t.u-tokyo.ac.jp/soe/admission/general-past)

By: Miyake

## **Description**

## **Kai**
### I.
#### 1.
$M(z)=z$ を整理すると、$(m-1)z(z-1)=0$であり、 $m \ne 0$ なので、 $z=0,1$ を得る。
実際、 $M(0)=0, M(1)=1$ である。

#### 2.

$$
\begin{aligned}
\frac{dM(z)}{dz}
&= \frac{m(mz-z+1) - mz(m-1)}{(mz-z+1)^2}
\\
&= \frac{m}{(mz-z+1)^2}
\\
\therefore \ \ 
\frac{dM(0)}{dz} &= m
\end{aligned}
$$

#### 3.

### II.
$0$ でない複素数 $z$ を極形式で $z=re^{i \theta} \ \ (r \gt 0, 0 \leq \theta \lt 2 \pi)$
と表すと、

$$
\begin{aligned}
J(z)
&= e^{-i \alpha} z + e^{i \alpha} z^{-1}
\\
&= r e^{i (\theta - \alpha)} + \frac{1}{r} e^{-i (\theta - \alpha)}
\\
&= \left( r + \frac{1}{r} \right) \cos (\theta - \alpha) + i \left( r - \frac{1}{r} \right) \sin (\theta - \alpha)
\end{aligned}
$$

なので、これの虚部

$$
\begin{aligned}
\left( r - \frac{1}{r} \right) \sin (\theta - \alpha)
\end{aligned}
$$

が正となるのは、「 $r \gt 1$ かつ $ \alpha \lt \theta \lt \alpha + \pi$ 」
または「 $r \lt 1$ かつ $ 0 \lt \theta \lt \alpha, \alpha + \pi \lt \theta \lt 2 \pi$ 」
のときである。

### III.