---
comments: false
title: 九州大学 工学府 応用化学専攻 機能物質化学系 2023年度 物理化学 2
tags:
  - Kyushu-University
---
# 九州大学 工学府 応用化学専攻 機能物質化学系 2023年度 物理化学 2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

## **Kai**
### (1)
$hc / (\lambda kT) \gg 1$ のとき

$$
  \begin{aligned}
  e^\frac{hc}{\lambda kT} \gg 1
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  \rho (\lambda, T)
  &\simeq \frac{8 \pi hc}{\lambda^5} e^{- \frac{hc}{\lambda kT}}
  \end{aligned}
$$

と表せる。

### (2)
$hc / (\lambda kT) \ll 1$ のとき

$$
  \begin{aligned}
  e^\frac{hc}{\lambda kT} \simeq 1 + \frac{hc}{\lambda kT}
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  \rho (\lambda, T)
  &\simeq \frac{8 \pi hc}{\lambda^5} \cdot \frac{1}{\frac{hc}{\lambda kT}}
  \\
  &= \frac{8 \pi kT}{\lambda^4}
  \end{aligned}
$$

と表せる。

### (3)

<p>
<a href="https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%A9%E3%83%B3%E3%82%AF%E3%81%AE%E6%B3%95%E5%89%87">
こちら
</a>
</p>

### (4)

<p>
<a href="https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%A3%E3%83%BC%E3%83%B3%E3%81%AE%E5%A4%89%E4%BD%8D%E5%89%87">
Wien の変位則
</a>
</p>

### (5)

$$
  \begin{aligned}
  T
  &= \frac{hc}{5 \lambda_\mathrm{max} k}
  \\
  &= 5.88 \times 10^3 \ \mathrm{K}
  \end{aligned}
$$

### (6)
まず、

$$
  \begin{aligned}
  C_{V, \mathrm{m}}
  &= \left( \frac{\partial U_\mathrm{m}}{\partial T} \right)_V
  \\
  &= 3N_A h \nu
  \frac{ - e^\frac{h \nu}{kT} \cdot \left( - \frac{h \nu}{kT^2} \right)}
  {\left( e^\frac{h \nu}{kT} - 1 \right)^2}
  \\
  &= \frac{3N_A h^2 \nu^2}{kT^2}
  \frac{e^\frac{h \nu}{kT}}{\left( e^\frac{h \nu}{kT} - 1 \right)^2}
  \end{aligned}
$$

である。

(i) $kT \gg h \nu$ のとき、

$$
  \begin{aligned}
  e^\frac{h \nu}{kT} \simeq 1 + \frac{h \nu}{kT}
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  C_{V, \mathrm{m}}
  &\simeq \frac{3N_A h^2 \nu^2}{kT^2}
  \frac{e^\frac{h \nu}{kT}}{\left( \frac{h \nu}{kT} \right)^2}
  \\
  &= 3N_Ak e^\frac{h \nu}{kT}
  \end{aligned}
$$

と近似できる。

(ii) $kT \ll h \nu$ のとき、

$$
  \begin{aligned}
  e^\frac{h \nu}{kT} - 1 \simeq e^\frac{h \nu}{kT}
  \end{aligned}
$$

であるから、

$$
  \begin{aligned}
  C_{V, \mathrm{m}}
  &\simeq \frac{3N_A h^2 \nu^2}{kT^2} e^{- \frac{h \nu}{kT}}
  \end{aligned}
$$

と近似できる。