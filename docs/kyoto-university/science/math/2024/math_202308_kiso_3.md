---
sidebar_label: "2024年度 基礎科目 [3]"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Fitting-Decomposition
  - Mathematics.Linear-Algebra.Kernel-and-Image
---

# 京都大学 理学研究科 数学・数理解析専攻 2024年度 基礎科目 問題3

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/index.html) refined with GPT 6 Astra)

## **Description**

$n,m$ を $n \ge 2m$ を満たす正の整数とする。$V$ を有限次元複素ベクトル空間とする。
$f: V\rightarrow V$ を $f^n = f^m$ を満たす線形写像とする。このとき、

$$
V = \text{Ker}(f^m) \oplus \text{Im} (f^m)
$$

を示せ。ここで、$\text{Ker}(f^m)$ は $f^m$ の核であり、$\text{Im}(f^m)$ は $f^m$ の像である。

#### 题目描述

设 $n,m$ 为满足 $n\geq2m$ 的正整数，$V$ 为有限维复向量空间，线性映射 $f:V\to V$ 满足

$$
f^n=f^m.
$$

证明

$$
V=\ker(f^m)\oplus\operatorname{Im}(f^m),
$$

其中 $\ker(f^m)$ 与 $\operatorname{Im}(f^m)$ 分别是 $f^m$ 的核与像。

## **Kai**

### (i)
$v \in V$ に対して

$$
\begin{aligned}
w &= f^{n-m}(v)
,\\
u &= v - w
\end{aligned}
$$

とおく。
$n \geq 2m$ なので、

$$
\begin{aligned}
w &= f^m \left( f^{n-2m} (v) \right)
\end{aligned}
$$

と書け、 $f^{n-2m}(v) \in V$ なので $w \in \mathrm{Im}(f^m)$ である。
また、

$$
\begin{aligned}
f^m(u)
&= f^m(v) - f^n(v)
\\
&= 0
\end{aligned}
$$

なので、 $u \in \mathrm{Ker}(f^m)$ である。
したがって、任意の $v \in V$ に対して

$$
\begin{aligned}
v = u + w
\end{aligned}
$$

であるような $u \in \mathrm{Ker}(f^m), \ w \in \mathrm{Im}(f^m)$
が存在するので、

$$
\begin{aligned}
V \subset \mathrm{Ker}(f^m) + \mathrm{Im}(f^m)
\ \ \ \ \left( = \left\{ u+w \mid
u \in \mathrm{Ker}(f^m), w \in \mathrm{Im}(f^m) \right\} \right)
\end{aligned}
$$

がわかる。

### (ii)
$\mathrm{Ker}(f^m) \subset V, \ \mathrm{Im}(f^m) \subset V$ から

$$
\begin{aligned}
\mathrm{Ker}(f^m) + \mathrm{Im}(f^m) \subset V
\end{aligned}
$$

がわかる。

### (iii)
$v \in V$ が
$v \in \mathrm{Ker}(f^m)$ かつ $v \in \mathrm{Im}(f^m)$
を満たすとすると、
$v \in \mathrm{Im}(f^m)$ より

$$
\begin{aligned}
v = f^m(v_0)
\end{aligned}
$$

を満たす $v_0 \in V$ が存在し、

$$
\begin{aligned}
v
&= f^m(v_0)
\\
&= f^n(v_0) \ \ \ \ \ \ \ \ ( \because f^n = f^m )
\\
&= f^{n-2m} \left( f^m (v) \right)
\\
&= f^{n-2m} (0) \ \ \ \ \ \ \ \ ( \because v \in \mathrm{Ker}(f^m) )
\\
&= 0
\end{aligned}
$$

を得る。
つまり、

$$
\begin{aligned}
\mathrm{Ker}(f^m) \cap \mathrm{Im}(f^m) = \left\{ 0 \right\}
\end{aligned}
$$

である。

### (iv) 
(i), (ii) より、

$$
\begin{aligned}
V = \mathrm{Ker}(f^m) + \mathrm{Im}(f^m)
\end{aligned}
$$

がわかり、さらに (iii) より、

$$
\begin{aligned}
V = \mathrm{Ker}(f^m) \oplus \mathrm{Im}(f^m)
\end{aligned}
$$

がわかる。

## **Reference**

- [京都大学公式問題（2024年度・基礎科目、PDF 3ページ）](https://www.math.kyoto-u.ac.jp/sites/default/files/2023-08/2024math_kiso.pdf)
- [照合用参考解答（R6-basic.pdf、PDF 3ページ）](https://drive.google.com/file/d/10PXdWyO95i45OhTTc_jJrXWKXB-z1nCf/view)
