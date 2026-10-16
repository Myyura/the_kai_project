---
sidebar_label: "2023年度 数学 1"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Fourier-Analysis.Parseval-Identity
---

# 京都大学 工学研究科 機械工学群 2023年度 数学 問題1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

実関数の内積を

$$
(f_1,f_2)=\int_{-\pi}^{\pi}f_1(x)f_2(x)\,dx
$$

で定義する。実定数 $a_0,a_1,a_2,b_0,b_1,b_2$ を用いて

$$
f(x)=\frac{a_0}{\sqrt{2\pi}}+\frac{a_1}{\sqrt\pi}\cos x+\frac{a_2}{\sqrt\pi}\sin x,
$$

$$
g(x)=\frac{b_0}{\sqrt{2\pi}}+\frac{b_1}{\sqrt\pi}\cos x+\frac{b_2}{\sqrt\pi}\sin x
$$

とする。以下の問いに答えよ。

1-1　$(f,g)$ を計算せよ。

1-2　演算子 $\hat O_1=2+d/dx$ に対して

$$
(f,\hat O_1g)=(a_0\ a_1\ a_2)A
\begin{pmatrix}b_0\\b_1\\b_2\end{pmatrix}
$$

を満たす $3\times3$ 実行列 $A$ を具体的な値で示せ。

1-3　$\hat O_2=1+2d/dx+2d^2/dx^2$ について $(f,\hat O_2^3f)$ を計算せよ。

1-4　次の微分方程式を考える。

$$
\left(2\frac{d^4}{dx^4}+\frac{d^2}{dx^2}\right)f(x)=\lambda f(x).
$$

境界条件は $f(\pi)=-1,f'(-\pi)=0$ とし、$\lambda$ は実定数とする。この方程式が成り立つすべての $\lambda$ と、それぞれに対応する $a_0,a_1,a_2$ を答えよ。

1-5　実定数 $\alpha_0,\ldots,\alpha_n,\beta_1,\ldots,\beta_n$ により

$$
g_n(x)=\frac12\alpha_0+\sum_{k=1}^n(\alpha_k\cos kx+\beta_k\sin kx)
$$

を定義する。周期 $2\pi$ の関数 $h(x)=|x|\ (-\pi\le x<\pi)$、$h(x+2\pi)=h(x)$ との自乗平均誤差

$$
\frac1{2\pi}\int_{-\pi}^{\pi}(h(x)-g_n(x))^2\,dx
$$

を最小にする $\alpha_0,\alpha_k,\beta_k\ (k=1,\ldots,n)$ を求めよ。これらはフーリエ係数となる。また $\lim_{n\to\infty}(g_n,g_n)$ を計算し、その過程を簡潔に説明せよ。

#### 题目描述

实函数内积定义为 $(f_1,f_2)=\int_{-\pi}^{\pi}f_1f_2\,dx$。函数 $f,g$ 在正交归一基 $1/\sqrt{2\pi},\cos x/\sqrt\pi,\sin x/\sqrt\pi$ 下的系数分别为 $(a_0,a_1,a_2)$ 和 $(b_0,b_1,b_2)$，系数均为实数。

1-1：求 $(f,g)$。

1-2：求微分算符 $\hat O_1=2+d/dx$ 的矩阵 $A$，使 $(f,\hat O_1g)=a^{\mathsf T}Ab$。

1-3：令 $\hat O_2=1+2d/dx+2d^2/dx^2$，求 $(f,\hat O_2^3f)$。

1-4：在上述三维函数空间内，求满足 $(2d^4/dx^4+d^2/dx^2)f=\lambda f$ 及 $f(\pi)=-1,f'(-\pi)=0$ 的所有 $\lambda,a_0,a_1,a_2$。

1-5：用三角多项式 $g_n=\alpha_0/2+\sum_{k=1}^n(\alpha_k\cos kx+\beta_k\sin kx)$ 逼近周期延拓的 $h(x)=|x|$。求使均方误差 $(2\pi)^{-1}\int_{-\pi}^{\pi}(h-g_n)^2\,dx$ 最小的全部系数，并求 $\lim_{n\to\infty}(g_n,g_n)$，简述推导。

## **Kai**

### 1-1

$e_0=1/\sqrt{2\pi},e_1=\cos x/\sqrt\pi,e_2=\sin x/\sqrt\pi$ は $(e_i,e_j)=\delta_{ij}$ を満たすので

$$
\boxed{(f,g)=a_0b_0+a_1b_1+a_2b_2}.
$$

### 1-2

$De_0=0,De_1=-e_2,De_2=e_1$ だから、$\hat O_1=2+D$ の行列表現は

$$
\boxed{A=\begin{pmatrix}2&0&0\\0&2&1\\0&-1&2\end{pmatrix}}.
$$

### 1-3

$\hat O_2=1+2D+2D^2$ の行列表現とその三乗は

$$
B=\begin{pmatrix}1&0&0\\0&-1&2\\0&-2&-1\end{pmatrix},\qquad
B^3=\begin{pmatrix}1&0&0\\0&11&-2\\0&2&11\end{pmatrix}.
$$

反対称な非対角成分は二次形式で打ち消し合うので

$$
\boxed{(f,\hat O_2^3f)=a_0^2+11a_1^2+11a_2^2}.
$$

### 1-4

$2D^4+D^2$ の行列表現は $\operatorname{diag}(0,1,1)$ である。境界条件から $f\ne0$ なので $\lambda=0$ または $1$。

$\lambda=0$ では $a_1=a_2=0$、$f(\pi)=-1$ から $a_0=-\sqrt{2\pi}$。

$\lambda=1$ では $a_0=0$ であり、$f(\pi)=-a_1/\sqrt\pi=-1$、$f'(-\pi)=-a_2/\sqrt\pi=0$ から $a_1=\sqrt\pi,a_2=0$。

したがって

$$
\boxed{(\lambda,a_0,a_1,a_2)=(0,-\sqrt{2\pi},0,0),\quad(1,0,\sqrt\pi,0)}.
$$

### 1-5

誤差を各係数で微分すると、最小点では $h-g_n$ が $1,\cos kx,\sin kx$ に直交する。三角関数系の直交性より

$$
\alpha_0=\frac1\pi\int_{-\pi}^{\pi}|x|\,dx=\boxed{\pi},
\qquad\boxed{\beta_k=0}.
$$

さらに部分積分により

$$
\alpha_k=\frac2\pi\int_0^\pi x\cos kx\,dx
=\boxed{\frac{2((-1)^k-1)}{\pi k^2}}
=\begin{cases}-4/(\pi k^2)&k\text{ が奇数},\\0&k\text{ が偶数}.\end{cases}
$$

直交性から誤差は各係数について正の二次式であり、この停留点が一意な最小点である。$g_n$ は $h$ のフーリエ部分和で、$h\in L^2[-\pi,\pi]$ より $g_n\to h$ が $L^2$ の意味で成立する。Parseval の等式によって

$$
\boxed{\lim_{n\to\infty}(g_n,g_n)=(h,h)
=2\int_0^\pi x^2\,dx=\frac{2\pi^3}{3}}.
$$

## **Reference**

- [京都大学公式問題の保存版：2023年度数学（2022年8月5日実施、PDF 2–3ページ）](https://web.archive.org/web/20230514225706id_/https://www.me.t.kyoto-u.ac.jp/ja/admission/exam/body/past_problems/files/2023_math)
- [Miyake：2023年度数学 1](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6.html)
