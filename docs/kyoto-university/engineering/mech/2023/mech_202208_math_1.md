---
sidebar_label: "2022年8月実施 数学 1"
tags:
  - Kyoto-University
  - Mathematics.Linear-Algebra.Inner-Product-and-Orthogonality
  - Mathematics.Linear-Algebra.Eigenvalues-and-Eigenvectors
  - Mathematics.Fourier-Analysis.Fourier-Series
  - Mathematics.Fourier-Analysis.Parseval-Identity
---

# 京都大学 工学研究科 機械工学群 2022年8月実施 数学 問題1

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6.html) refined with GPT 6 Astra)

## **Description**

1. 実関数の内積を以下の式で定義する。

$$
(f_1(x),f_2(x))=\int_{-\pi}^{\pi}f_1(x)f_2(x)\,dx.\tag{1.1}
$$

関数 $f(x),g(x)$ を

$$
f(x)=a_0\frac1{\sqrt{2\pi}}+a_1\frac1{\sqrt\pi}\cos x+a_2\frac1{\sqrt\pi}\sin x,\tag{1.2}
$$

$$
g(x)=b_0\frac1{\sqrt{2\pi}}+b_1\frac1{\sqrt\pi}\cos x+b_2\frac1{\sqrt\pi}\sin x\tag{1.3}
$$

とする。ここで、$a_0,a_1,a_2,b_0,b_1,b_2$ は実定数である。以下の問いに答えよ。

### 1-1

$(f(x),g(x))$ を計算せよ。

### 1-2

演算子 $\hat O_1=2+\dfrac{d}{dx}$ を考えると

$$
(f(x),\hat O_1g(x))=
\begin{pmatrix}a_0&a_1&a_2\end{pmatrix}A
\begin{pmatrix}b_0\\b_1\\b_2\end{pmatrix}\tag{1.4}
$$

をみたす3行3列の実行列 $A$ が存在する。$A$ を具体的な値で示せ。

### 1-3

演算子 $\hat O_2=1+2\dfrac{d}{dx}+2\dfrac{d^2}{dx^2}$ について、$(f(x),(\hat O_2)^3f(x))$ を計算せよ。

### 1-4

次の微分方程式について考える。

$$
\left(2\frac{d^4}{dx^4}+\frac{d^2}{dx^2}\right)f(x)=\lambda f(x).\tag{1.5}
$$

境界条件は $f(\pi)=-1,f'(-\pi)=0$ とし、$\lambda$ は実定数とする。ここで $f'(x)$ は $f(x)$ の導関数である。この微分方程式が成立する全ての $\lambda$ の値とそれぞれの $\lambda$ に対応した $a_0,a_1,a_2$ の値を答えよ。

### 1-5

実定数 $\alpha_0,\alpha_1,\ldots,\alpha_n,\beta_1,\beta_2,\ldots,\beta_n$ を用いて関数 $g_n(x)$ を

$$
g_n(x)=\frac12\alpha_0+\sum_{k=1}^n(\alpha_k\cos kx+\beta_k\sin kx)\tag{1.6}
$$

と定義する。関数 $g_n(x)$ と $2\pi$ を周期とする次の関数

$$
h(x)=|x|\quad(-\pi\le x<\pi),\qquad h(x+2\pi)=h(x)\tag{1.7}
$$

との自乗平均誤差

$$
\frac1{2\pi}\int_{-\pi}^{\pi}(h(x)-g_n(x))^2\,dx\tag{1.8}
$$

が最小となるように $\alpha_0,\alpha_k,\beta_k\ (k=1,\ldots,n)$ を決定する。このとき $\alpha_0,\alpha_k,\beta_k\ (k=1,\ldots,n)$ はフーリエ係数となっている。$\alpha_0,\alpha_k,\beta_k\ (k=1,\ldots,n)$ を計算するとともに、$\displaystyle\lim_{n\to\infty}(g_n(x),g_n(x))$ の値がいくらになるかを計算し、その過程を簡潔に説明せよ。

#### 题目描述

1. 实函数的内积定义为

$$
(f_1(x),f_2(x))=\int_{-\pi}^{\pi}f_1(x)f_2(x)\,dx.\qquad(1.1)
$$

设函数 $f(x),g(x)$ 为

$$
f(x)=a_0\frac1{\sqrt{2\pi}}+a_1\frac1{\sqrt\pi}\cos x+a_2\frac1{\sqrt\pi}\sin x,\qquad(1.2)
$$

$$
g(x)=b_0\frac1{\sqrt{2\pi}}+b_1\frac1{\sqrt\pi}\cos x+b_2\frac1{\sqrt\pi}\sin x,\qquad(1.3)
$$

其中 $a_0,a_1,a_2,b_0,b_1,b_2$ 均为实常数。回答以下问题。

**1-1**

计算 $(f(x),g(x))$。

**1-2**

考虑算子 $\hat O_1=2+\dfrac{d}{dx}$，存在一个 $3\times3$ 实矩阵 $A$ 满足

$$
(f(x),\hat O_1g(x))=
\begin{pmatrix}a_0&a_1&a_2\end{pmatrix}A
\begin{pmatrix}b_0\\b_1\\b_2\end{pmatrix}.\qquad(1.4)
$$

求出 $A$ 的具体数值。

**1-3**

对于算子 $\hat O_2=1+2\dfrac{d}{dx}+2\dfrac{d^2}{dx^2}$，计算 $(f(x),(\hat O_2)^3f(x))$。

**1-4**

考虑微分方程

$$
\left(2\frac{d^4}{dx^4}+\frac{d^2}{dx^2}\right)f(x)=\lambda f(x).\qquad(1.5)
$$

边界条件为 $f(\pi)=-1,f'(-\pi)=0$，$\lambda$ 为实常数，$f'(x)$ 为 $f(x)$ 的导函数。求使该微分方程成立的所有 $\lambda$ 值，以及每个 $\lambda$ 对应的 $a_0,a_1,a_2$。

**1-5**

用实常数 $\alpha_0,\alpha_1,\ldots,\alpha_n,\beta_1,\beta_2,\ldots,\beta_n$ 定义函数

$$
g_n(x)=\frac12\alpha_0+\sum_{k=1}^n(\alpha_k\cos kx+\beta_k\sin kx).\qquad(1.6)
$$

将函数 $g_n(x)$ 与以下周期为 $2\pi$ 的函数进行比较：

$$
h(x)=|x|\quad(-\pi\le x<\pi),\qquad h(x+2\pi)=h(x).\qquad(1.7)
$$

选择 $\alpha_0,\alpha_k,\beta_k\ (k=1,\ldots,n)$，使均方误差

$$
\frac1{2\pi}\int_{-\pi}^{\pi}(h(x)-g_n(x))^2\,dx\qquad(1.8)
$$

最小。这时 $\alpha_0,\alpha_k,\beta_k\ (k=1,\ldots,n)$ 就是傅里叶系数。求这些系数，同时计算 $\displaystyle\lim_{n\to\infty}(g_n(x),g_n(x))$ 的值，并简要说明计算过程。

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
\begin{gathered}
\alpha_k=\frac2\pi\int_0^\pi x\cos kx\,dx\\
=\boxed{\frac{2((-1)^k-1)}{\pi k^2}}\\
=\begin{cases}-4/(\pi k^2)&k\text{ が奇数},\\0&k\text{ が偶数}.\end{cases}
\end{gathered}
$$

直交性から誤差は各係数について正の二次式であり、この停留点が一意な最小点である。$g_n$ は $h$ のフーリエ部分和で、$h\in L^2[-\pi,\pi]$ より $g_n\to h$ が $L^2$ の意味で成立する。Parseval の等式によって

$$
\boxed{\lim_{n\to\infty}(g_n,g_n)=(h,h)
=2\int_0^\pi x^2\,dx=\frac{2\pi^3}{3}}.
$$

## **Reference**

- [京都大学公式問題の保存版：2023年度数学（2022年8月5日実施、PDF 2–3ページ）](https://web.archive.org/web/20230514225706id_/https://www.me.t.kyoto-u.ac.jp/ja/admission/exam/body/past_problems/files/2023_math)
- [Miyake：2023年度数学 1](https://miyake.github.io/exams/%E4%BA%AC%E9%83%BD%E5%A4%A7%E5%AD%A6/%E5%B7%A5%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E6%A9%9F%E6%A2%B0%E5%B7%A5%E5%AD%A6%E7%BE%A4/2023%E5%B9%B4%E5%BA%A6_%E6%95%B0%E5%AD%A6.html)
