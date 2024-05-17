---
comments: false
title: 大阪大学 工学研究科 電気電子情報工学専攻 2020年度 基礎科目 【数学3】
tags:
  - Osaka-University
---
# 大阪大学 工学研究科 電気電子情報工学専攻 2020年度 基礎科目 【数学3】

## **Author**
Miyake

## **Description**

## **Kai**
### (a)

$$
\begin{aligned}
f(z)
= \frac{z e^{irz}}{z^2 + m^2}
= \frac{z e^{irz}}{(z+im)(z-im)}
\end{aligned}
$$

であるから、 $z=im,-im$ が1位の極であり、それぞれにおける留数は、

$$
\begin{aligned}
\lim_{z \to im} (z-im) f(z) = \frac{1}{2} e^{-rm}
, \ \ 
\lim_{z \to -im} (z+im) f(z) = \frac{1}{2} e^{rm}
\end{aligned}
$$

である。

### (b)
留数定理より、

$$
\begin{aligned}
\int_{C_1+C_2} f(z) dz
= 2 \pi i \cdot \frac{1}{2} e^{-rm}
= i \pi e^{-rm}
\end{aligned}
$$

である。

### (\(c\))
<!-- 要修正 -->
$C_2$ 上の $z$ は $z=Re^{i \theta} \ \ (0 \leq \theta \leq \pi)$ と書け、
$dz = iRe^{i \theta} d \theta$
なので、

$$
\begin{aligned}
\int_{C_2} f(z) dz
&= \int_0^\pi \frac{R e^{i \theta} e^{irR \exp(i \theta)}}{R^2 e^{2i \theta} + m^2} \cdot iR e^{i \theta} d \theta
\\
&= i \int_0^\pi \frac{ e^{-rR \sin \theta} e^{irR \cos \theta} }{ 1 + \frac{m^2}{R^2} e^{- 2i \theta} } d \theta
\end{aligned}
$$

であり、

$$
\begin{aligned}
\left| \int_{C_2} f(z) dz \right|
&\leq \int_{C_2} \left| f(z) \right| \left| dz \right|
\\
&= \int_0^\pi \left| \frac{ e^{-rR \sin \theta} e^{irR \cos \theta} }{ 1 + \frac{m^2}{R^2} e^{- 2i \theta} } \right| d \theta
\\
&\to 0 \ \ (R \to 0)
\end{aligned}
$$

である。

### (d)
(b), (\(c\)) より、

$$
\begin{aligned}
\lim_{R \to \infty} \int_{C_1} f(z) dz = i \pi e^{-rm}
\end{aligned}
$$

であるが、 $m=1$ とすると、

$$
\begin{aligned}
\int_{- \infty}^\infty \frac{k e^{ik}}{k^2+1} dk = i \pi e^{-r}
\end{aligned}
$$

となり、これの両辺の虚部を考えると、

$$
\begin{aligned}
\int_{- \infty}^\infty \frac{k \sin k}{k^2+1} dk = \pi e^{-r}
\end{aligned}
$$

したがって、

$$
\begin{aligned}
\int_0^\infty \frac{2k \sin k}{k^2+1} dk = \pi e^{-r}
\end{aligned}
$$

を得る。