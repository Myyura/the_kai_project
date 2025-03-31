---
sidebar_label: "2021年8月実施 専門科目 S-5"
sidebar_position: 17
tags:
  - Kyoto-University
---

# 京都大学 情報学研究科 知能情報学専攻 2021年8月実施 専門科目 S-5

## **Author**
祭音Myyura

## **Description**
Let $n \in \mathbb{Z}$ be a discrete-time index.
The unit impulse signal $\delta[n]$ and the unit step signal $u[n]$ are defined as follows:

$$
\delta[n] = \begin{cases}
    0 &(n \neq 0) \\
    1 &(n=0)
\end{cases}
$$

$$
u[n] = \begin{cases}
    0 &(n < 0) \\
    1 &(n \geq 0)
\end{cases}
$$

**Q.1** Compute the $z$-transform $X(z)$ of a discrete-time signal $x[n]$ given below.

- (1) $x[n] = 3\delta [n] - 2\delta [n-2] + 5\delta [n-4]$
- (2) $x[n] = nu[n]$

**Q.2** Judge the stability of a system whose transfer function $H(z)$ is given below and draw the correponding circuit.
In addition, compute the inverse $z$-transform $h[n]$.

- (1) $H(z) = 1 + 2z^{-1} + 3z^{-2}$
- (2) $H(z) = \frac{1 + 2z^{-1}}{2 - z^{-1}}$

**Q.3** Compute the discrete-time Fourier transform $F(\omega)$ of a discrete-time signal $x[n]$ given below, where $\omega$ represents a normalized angular frequency.

- (1) $x[n] = 3\delta [n] - 2\delta [n-2] + 5\delta [n-4]$
- (2) $x[n] = u[n] - u[n-6]$

## **Kai**
### Q.1
#### (1)

$$
X(z) = 3-2z^{-2}+5z^{-4}
$$

#### (2)
Note that

$$
\sum_{n=-\infty}^{\infty}u[n]z^{-n} =\sum_{n=0}^{\infty}z^{-n} = \frac{1}{1-z^{-1}}
$$

hence

$$
\sum_{n=0}^{\infty}(-n)z^{-n-1} = \frac{-z^{-2}}{(1-z^{-1})^{2}}
$$


$$
\sum_{n=0}^{\infty}nz^{-n-1} = X(z) = \frac{z^{-1}}{(1-z^{-1})^{2}}
$$

### Q.2
#### (1)
The system is stable since the pole of the transfer function is at $z = 0$, which lies within the unit circle.

The corresponding circuit diagram is as follows:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist_202108_senmon_s_5_p1.png" width="400" alt=""/>
</figure>

and

$$
h[n] = \delta[n]+2\delta[n-1]+3\delta[n-2]
$$

#### (2)
The system is stable since the pole of the transfer function is at $z = \frac{1}{2}$, which lies within the unit circle.

The corresponding circuit diagram is as follows:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyoto_university/informatics/ist_202108_senmon_s_5_p2.png" width="400" alt=""/>
</figure>

Note that

$$
\sum_{n=-\infty}^{\infty}a^{n}u[n]z^{-n}
= \sum_{n=-\infty}^{\infty}u[n](az^{-1})^{n}
= \sum_{n=0}^{\infty}(az^{-1})^{n}
=\frac{1}{1-az^{-1}}
$$

hence

$$
H(z) = -2+\frac{5}{2-z^{-1}} = -2+2\cdot 5\frac{1}{1-2^{-1}\cdot z^{-1}}
$$

$$
\Rightarrow h[n] = -2\delta[n]+5\cdot 2^{-n+1}u[n]
$$

### Q.3
Note that

$$
\begin{align}
\sum_{n=-\infty}^{\infty}\delta[n-a]e^{-i\omega n} = e^{-i\omega a} \tag{*}
\end{align}
$$

and

$$
\begin{align}
\sum_{n=-\infty}^{\infty}(u[n]-u[n-a])e^{-i\omega n} &= \sum_{k=0}^{a-1}e^{-i\omega k}= \frac{1-e^{-i\omega a}}{1-e^{-i\omega}} \nonumber \\
&= \frac{e^{-i\omega a/2}\left(e^{i\omega a/2}-e^{-i\omega a/2}\right)}{e^{-i\omega/2}\left(e^{i\omega/2}-e^{-i\omega/2}\right)} \nonumber \\
&= e^{-i\omega(a-1)/2}\frac{\sin a\omega/2}{\sin \omega/2} \tag{**}
\end{align}
$$

#### (1)
By (*) we have

$$
F(\omega) = 3 - 2e^{-i2\omega} + 5e^{-i4\omega}
$$

#### (2)
By (**) we have

$$
F(\omega) = e^{-i5\omega/2}\frac{\sin 3\omega}{\sin \omega/2}
$$