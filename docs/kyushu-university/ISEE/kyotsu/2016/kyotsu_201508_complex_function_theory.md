---
sidebar_label: 2015年8月実施 複素関数論
tags:
  - Kyushu-University
  - Mathematics.Complex-Analysis.Residue-Theorem
  - Mathematics.Complex-Analysis.Infinite-Series-by-Residues
---
# 九州大学 システム情報科学府 情報理工学専攻・電気電子工学専攻 2015年8月実施 複素関数論

## **Author**
Zero, 祭音Myyura

## **Description**

> 出典：九州大学[公式問題](https://www.isee.kyushu-u.ac.jp/script/wordpress/wp-content/uploads/H28infait.pdf)。
複素関数 $f(z) = \frac{\pi\cot\pi z}{z^2 + a^2}$ を考える。ただし, $a > 0$ とする。次の各問に答えよ。

(1) $f(z)$ のすべての極における留数を求めよ。

(2) 図に示す閉路 $C_N$ に沿った複素積分 $\oint_{C_N} f(z)dz$ を考える。ただし, $N$ は自然数とする。 $\lim_{N \rightarrow \infty}\oint_{C_N}f(z)dz$ の値を求めよ。

(3) $\lim_{N \rightarrow \infty}\oint_{C_N}f(z)dz$ の値を用して, $\sum_{n=1}^{\infty}\frac{1}{n^2 + a^2} = \frac{\pi}{2a}\coth \pi a - \frac{1}{2a^2}$ を示せ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu_university/ISEE/kyotsu_2016_complex_function_theory_p1.png" width="527" height="384" alt=""/>
</figure>

-----------------------------------------------

Consider the complex function $f(z) = \frac{\pi\cot\pi z}{z^2 + a^2}$ , where $a > 0$ . Answer the following questions.

(1) Find the residues of $f(z)$ at all its poles.

(2) Consider the complex integral $\oint_{C_N} f(z)dz$ , where $C_N$ is a closed path as shown in the figure and $N$ is a natural number. Find the value of $\lim_{N \rightarrow \infty}\oint_{C_N}f(z)dz$ .

(3) Using the value of $\lim_{N \rightarrow \infty}\oint_{C_N}f(z)dz$ , prove that $\sum_{n=1}^{\infty}\frac{1}{n^2 + a^2} = \frac{\pi}{2a}\coth \pi a - \frac{1}{2a^2}$ .

### 题目描述

设 $a>0$，考虑复函数

$$
f(z)=\frac{\pi\cot\pi z}{z^2+a^2}.
$$

回答下列问题：

1. 找出 $f(z)$ 的全部极点，并求它在每一个极点处的留数。
2. 令 $N$ 为自然数，对原图所示的闭路 $C_N$，求

   $$
   \lim_{N\to\infty}\oint_{C_N}f(z)\,dz.
   $$

   原图给出的 $C_N$ 是顶点为 $(N+\frac12)(\pm1\pm i)$、方向为正向的正方形边界，因而不经过 $\cot(\pi z)$ 的整数极点。
3. 利用第 2 问的极限证明

   $$
   \sum_{n=1}^{\infty}\frac1{n^2+a^2}
   =\frac{\pi}{2a}\coth(\pi a)-\frac1{2a^2}.
   $$

## **Kai**
### (1)

$$
\begin{aligned}
f(z) &= \frac{\pi \cot \pi z}{z^2 + a^2} \\
&= \frac{\pi \cos \pi z}{(z^2 + a^2)\sin\pi z} \\
&= \frac{\pi \cos \pi z}{(z + ai)(z - ai)\sin \pi z}
\end{aligned}
$$

$z = ai,-ai,n$ ( $n$ は整数)

$\text{Res}_{z = ai}f(z)$ を求める。正則な関数 $g(z) = \frac{\pi \cos \pi z}{(z + ai)\sin \pi z}$ とする。

$$
\begin{aligned}
\text{Res}_{z = ai}f(z) &= g(ai)\\
&= \frac{\pi \cos \pi(ai)}{2ai \cdot \sin\pi(ai)} \\
&= \frac{\pi \cdot \cosh(\pi a)}{2ai \cdot i\sinh(\pi a)} \\
&= -\frac{\pi}{2a} \coth(\pi a)
\end{aligned}
$$

次に、 $\text{Res}_{z = -ai}f(z)$ を求める。 $g(z) = \frac{\pi \cos\pi z}{(z - ai)\sin\pi z}$

$$
\begin{aligned}
\text{Res}_{z = -ai}f(z) &= g(-ai)\\
&= \frac{\pi\cos\pi(-ai)}{(-2ai)\sin\pi(-ai)} \\
&= \frac{\pi\cosh(-\pi a)}{-2ai \cdot i \sinh(-\pi a)} \\
&= \frac{\pi}{2a}\coth(-\pi a) \\
&= -\frac{\pi}{2a}\coth \pi a
\end{aligned}
$$

最後に、 $\text{Res}_{z = n}f(z)$ を求める。

$$
\begin{aligned}
\text{Res}_{z = n}f(z) &= \lim_{z \rightarrow n} \pi \cdot \frac{1}{\{(z^2 + a^2) \tan \pi z\}'} \\
&= \lim_{z \rightarrow n} \pi \cdot \frac{1}{2z\tan \pi z + (z^2 + a^2) \cdot \frac{1}{\cos^2\pi z} \cdot \pi} \\
&= \lim_{z \rightarrow n} \pi \cdot \frac{\cos^2\pi z}{2z\sin\pi z \cos\pi z + \pi(z^2 + a^2)} \\
&= \lim_{z \rightarrow n} \pi \cdot \frac{\cos^2 \pi z}{z \sin 2\pi z + \pi(z^2 + a^2)} \\
&= \lim_{z \rightarrow n} \pi \cdot \frac{1}{\pi(n^2 + a^2)} \\
&= \frac{1}{n^2 + a^2}
\end{aligned}
$$

### (2)

図より $R_N=N+\frac12$ とおくと、$C_N$ は
$|\operatorname{Re}z|\leq R_N,\ |\operatorname{Im}z|\leq R_N$ の正方形の正向き境界である。
鉛直辺では

$$
|\cot\pi(\pm R_N+iy)|=|\tanh\pi y|\leq1,
$$

水平辺では $|\cot\pi(x\pm iR_N)|\leq\coth(\pi R_N)$ である。また $z\in C_N$ なら
$|z|\geq R_N$ なので、$R_N>a$ のとき

$$
|z^2+a^2|\geq |z|^2-a^2\geq R_N^2-a^2.
$$

したがって ML 評価より

$$
\left|\oint_{C_N}f(z)\,dz\right|
\leq\frac{8\pi R_N\coth(\pi R_N)}{R_N^2-a^2}
\longrightarrow0.
$$

### (3)
留数定理から、

$$
\begin{aligned}
\lim_{N \rightarrow \infty}\oint_{C_N}f(z)dz &= 2\pi i \bigg(\sum_{n = -\infty}^{\infty} \frac{1}{n^2 + a^2} - \frac{\pi}{a}\coth \pi a\bigg) \\
0 &= 2\pi i \bigg(\sum_{n = -\infty}^{\infty}\frac{1}{n^2 + a^2} - \frac{\pi}{a}\coth\pi a\bigg) \\
\sum_{n = -\infty}^{\infty} \frac{1}{n^2 + a^2} &= \frac{\pi}{a}\coth \pi a \\
\sum_{n = -\infty}^{-1}\frac{1}{n^2 + a^2} + \frac{1}{a^2} + \sum_{n = 1}^{\infty}\frac{1}{n^2 + a^2} &= \frac{\pi}{a} \coth\pi a \\
2\sum_{n = 1}^{\infty}\frac{1}{n^2 + a^2} &= \frac{\pi}{a}\coth\pi a - \frac{1}{a^2} \\
\sum_{n = 1}^{\infty}\frac{1}{n^2 + a^2} &= \frac{\pi}{2a}\coth\pi a - \frac{1}{2a^2}
\end{aligned}
$$
