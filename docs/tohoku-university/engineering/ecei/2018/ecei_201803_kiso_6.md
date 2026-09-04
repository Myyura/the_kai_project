---
sidebar_label: 2018年3月実施 基礎科目 問題6 数学基礎
tags:
  - Tohoku-University
  - Mathematics.Calculus.Gaussian-Integral
  - Mathematics.Linear-Algebra.Orthogonal-Diagonalization-of-Symmetric-Matrices
  - Mathematics.Complex-Analysis.Branch-Cut
  - Mathematics.Differential-Equations.Laplace-Transform
---

# 東北大学 工学研究科 電気・情報系 2018年3月実施 基礎科目 問題6 数学基礎

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

ガウス積分は以下の公式で与えられる。

$$
\int_{-\infty}^{\infty}\exp\left(-\frac12ax^2\right)dx=\sqrt{\frac{2\pi}{a}}.
$$

ここで $a$ は正の実数とする。以下の問に答えよ。

(1) 以下の実数 $x_1,x_2,x_3$ に関する重積分を考える。

$$
I_1=\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}\exp\left(-\frac12f(x_1,x_2,x_3)\right)dx_1dx_2dx_3.
$$

ここで $f(x_1,x_2,x_3)$ は以下のように定義される。

$$
f(x_1,x_2,x_3)=2x_1^2+2x_2^2+2x_3^2+2x_1x_2-2x_2x_3-2x_3x_1.
$$

(a) $f(x_1,x_2,x_3)$ を以下の $2$ 次形式で書き直した際に得られる対称行列 $A$ を求めよ。

$$
f(x_1,x_2,x_3)=(x_1,x_2,x_3)A\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}.
$$

(b) 行列 $A$ の行列式の値を求めよ。

(c) 行列 $A$ を対角化する直交行列 $O$ を求めよ。

(d) 定積分 $I_1$ を計算せよ。

(2) 以下の実数 $x$ に関する積分を複素積分を用いて考える。$p$ は虚軸上にない複素数とする。

$$
I_2=\int_0^\infty\frac{\sqrt{x}}{x^2+p^2}dx.
$$

(a) 被積分関数の引数を複素数 $z$ に拡張した次の関数の極は $z=\pm ip$ で与えられる。

$$
g(z)=\frac{\sqrt z}{z^2+p^2}.
$$

留数定理を用いて、Fig. 6(a) で与えられる積分経路 $C$ による $\oint_Cg(z)dz$ を計算せよ。

(b) 積分経路 $C$ 上で半径 $R$ の円周上及び半径 $\epsilon$ の円周上の積分が、$R\to\infty$ および $\epsilon\to0$ で $0$ となることを用いて $I_2$ を計算せよ。

以下の実数 $x$ に関する積分を含む関数をラプラス変換を用いて考える。

$$
f(t)=\int_0^\infty\frac{\sin tx}{\sqrt x}dx.
$$

ここで $t$ は正の実数とする。

(c) $f(t)$ にラプラス変換を実行することにより像関数 $F(p)\equiv\int_0^\infty f(t)e^{-pt}dt$ を求めよ。

(d) これらの結果を用いて $f(t)$ を求めよ。

### 题目描述

可使用 Gaussian 积分 $\int_{-\infty}^{\infty}e^{-ax^2/2}\,dx=\sqrt{2\pi/a}$（$a>0$）。

1. 设
   

$$
I_1=\int_{\mathbb R^3}e^{-f(x_1,x_2,x_3)/2}\,dx_1dx_2dx_3,
$$

   

$$
f=2x_1^2+2x_2^2+2x_3^2+2x_1x_2-2x_2x_3-2x_3x_1.
$$

   (a) 求对称矩阵 $A$ 使 $f=x^TAx$；(b) 求 $\det A$；(c) 求使 $A$ 对角化的正交矩阵 $O$；(d) 求 $I_1$。
2. 对不在虚轴上的复数 $p$，考虑
   

$$
I_2(p)=\int_0^\infty\frac{\sqrt x}{x^2+p^2}\,dx.
$$

   (a) 对 $g(z)=\sqrt z/(z^2+p^2)$，沿绕正实轴割线的钥匙孔路径 $C$ 用留数定理求 $\oint_Cg(z)\,dz$。路径由半径 $R$ 的正向大圆、半径 $\varepsilon$ 的反向小圆以及正实轴上下两侧组成，包围两个极点 $\pm ip$。
   (b) 利用 $R\to\infty,\varepsilon\to0$ 时两圆弧积分消失，求 $I_2$。
   (c) 对 $t>0$ 定义 $f(t)=\int_0^\infty\sin(tx)/\sqrt x\,dx$，求其 Laplace 变换 $F(p)$。
   (d) 利用以上结果求 $f(t)$。

![正实轴割线周围的钥匙孔积分路径](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201803_kiso_6_keyhole.svg)

## **Kai**

### (1)

$$
\boxed{A=\begin{pmatrix}2&1&-1\\1&2&-1\\-1&-1&2\end{pmatrix}},\qquad \boxed{\det A=4}.
$$

$A=I+vv^T$，$v=(1,1,-1)^T$，故特征值为 $1,1,4$。取

$$
\boxed{O=\begin{pmatrix}
1/\sqrt2&1/\sqrt6&1/\sqrt3\\
-1/\sqrt2&1/\sqrt6&1/\sqrt3\\
0&2/\sqrt6&-1/\sqrt3
\end{pmatrix}},\qquad O^TAO=\operatorname{diag}(1,1,4).
$$

作正交变换 $x=Oy$，Jacobian 的绝对值为 $1$，于是

$$
\boxed{I_1=\sqrt{2\pi}\sqrt{2\pi}\sqrt{\frac{2\pi}{4}}=\frac{(2\pi)^{3/2}}2}.
$$

### (2)(a)、(b)

取支路 $\sqrt z=\sqrt{|z|}e^{i\arg z/2}$，$0<\arg z<2\pi$。两简单极点的留数为

$$
\operatorname{Res}(g,ip)=\frac{\sqrt{ip}}{2ip},\qquad
\operatorname{Res}(g,-ip)=-\frac{\sqrt{-ip}}{2ip},
$$

此处根号均取上述支路。因此

$$
\boxed{\oint_Cg(z)\,dz=\frac\pi p\bigl(\sqrt{ip}-\sqrt{-ip}\bigr)}.
$$

正实轴上侧根号为 $\sqrt x$，下侧为 $-\sqrt x$，且方向相反，故极限轮廓积分等于 $2I_2$。两圆弧贡献分别为 $O(R^{-1/2})$、$O(\varepsilon^{3/2})$，均趋于零。

令 $q=p$（$\Re p>0$），$q=-p$（$\Re p<0$），则 $\Re q>0$，且 $p^2=q^2$。用主值 $\sqrt q$，得到

$$
\boxed{I_2(p)=\frac\pi{\sqrt2\sqrt q}}.
$$

特别地，$p>0$ 时 $I_2(p)=\pi/\sqrt{2p}$。

### (2)(c)、(d)

先加入 $e^{-\eta x}$（$\eta>0$）使交换积分合法，再令 $\eta\downarrow0$。对 $\Re p>0$，

$$
\begin{aligned}
F(p)&=\int_0^\infty\frac1{\sqrt x}\left(\int_0^\infty e^{-pt}\sin(tx)\,dt\right)dx\\
&=\int_0^\infty\frac{\sqrt x}{x^2+p^2}\,dx
=\boxed{\frac\pi{\sqrt{2p}}}.
\end{aligned}
$$

由 Gaussian 积分代换 $t=u^2$ 得 $\mathcal L[t^{-1/2}](p)=\sqrt\pi/\sqrt p$。故

$$
\boxed{f(t)=\sqrt{\frac\pi{2t}}\quad(t>0)}.
$$
