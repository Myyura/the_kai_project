---
sidebar_label: "2022年8月実施 物理化学2"
tags:
  - Kyushu-University
  - Chemistry.Physical-Chemistry.Planck-Blackbody-Law
  - Chemistry.Physical-Chemistry.Wien-Displacement-Law
  - Chemistry.Physical-Chemistry.Einstein-Solid-Heat-Capacity
---
# 九州大学 工学府 応用化学専攻 機能物質化学系 2022年8月実施 物理化学2

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)

## **Description**

### 题目描述

本文件原 Description 为空；现有解答未保存第 (3)—(5) 问的完整文字，其中 (3)、(4) 仅留下外部参考链接。由现有内容可确认题目围绕 Planck 黑体辐射定律

$$
\rho(\lambda,T)
=\frac{8\pi hc}{\lambda^5}
\frac1{\exp\!\left(\frac{hc}{\lambda kT}\right)-1}
$$

以及 Einstein 固体模型展开：

1. 在 $hc/(\lambda kT)\gg1$ 时求 $\rho(\lambda,T)$ 的短波近似。
2. 在 $hc/(\lambda kT)\ll1$ 时求 $\rho(\lambda,T)$ 的长波近似。
3. 第 (3) 问原解答仅引用了 [Planck 定律资料](https://ja.wikipedia.org/wiki/%E3%83%97%E3%83%A9%E3%83%B3%E3%82%AF%E3%81%AE%E6%B3%95%E5%89%87)，具体问法未保存在仓库中。
4. 第 (4) 问原解答仅引用了 [Wien 位移定律资料](https://ja.wikipedia.org/wiki/%E3%82%A6%E3%82%A3%E3%83%BC%E3%83%B3%E3%81%AE%E5%A4%89%E4%BD%8D%E5%89%87)，具体问法未保存在仓库中。
5. 利用 Wien 型关系
   $$
   T=\frac{hc}{5\lambda_{\max}k}
   $$
   计算给定峰值波长所对应的温度；现有解答结果为 $5.88\times10^3\,\mathrm K$，但原题给出的 $\lambda_{\max}$ 数值已缺失。
6. 对 Einstein 固体的摩尔内能
   $$
   U_{\mathrm m}=\frac{3N_Ah\nu}{e^{h\nu/(kT)}-1},
   $$
   求定容摩尔热容 $C_{V,\mathrm m}=(\partial U_{\mathrm m}/\partial T)_V$，并分别求 $kT\gg h\nu$ 与 $kT\ll h\nu$ 下的近似式。

#### 考点

- **Planck 黑体辐射定律**：在指数变量很大或很小时作渐近展开，分别得到短波 Wien 近似和长波 Rayleigh–Jeans 近似。
- **Wien 位移定律**：联系谱峰波长与绝对温度，并据给定数据估算温度。
- **Einstein 固体热容**：对量子振子内能关于温度求导，分析高温经典极限和低温指数抑制。

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
