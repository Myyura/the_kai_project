---
sidebar_label: '数学 第1問'
tags:
  - Tokyo-University
---

# 東京大学 工学系研究科 2020年度 数学 第1問

## **Author**
[Miyake](https://miyake.github.io/exams/index.html)、後生楽 広小路


## **Description**

[2020年度入試問題 Exam paper 数学](https://github.com/Myyura/the_kai_project_assets/blob/7d274740e9aacde6948ee5ca73a336a00fe76d04/kakomonn/tokyo_university/engineering/Description/%E6%95%B0%E5%AD%A62020.pdf)

## **Kai**
### I.
#### 1.
$y=(\cos{x})^{m}$とすると

$$
\begin{aligned}
 & \frac{dy}{dx}=-m(\cos x)^{m-1}\sin x, \\
 & \frac{d^2y}{dx^2}=m(m-1)(\cos x)^{m-2}\sin^2x-m(\cos x)^m
\end{aligned}
$$

となるので，式(1)より

$$
\begin{aligned}
 & \cos x\frac{d^2y}{dx^2}-\sin x\frac{dy}{dx}-\frac{y}{\cos x} \\
 & =\cos x\left[m(m-1)(\cos x)^{m-2}\sin^2x-m(\cos x)^m\right]-\sin x\left[-m(\cos x)^{m-1}\sin x\right]-\frac{(\cos x)^m}{\cos x} \\
 & =-m(\cos x)^{m+1}+m^2\sin^2x(\cos x)^{m-1}-(\cos x)^{m-1} \\
 & =-m(\cos x)^{m+1}+m^2(1-\cos^2x)(\cos x)^{m-1}-(\cos x)^{m-1} \\
 & =(m^2-1)(\cos x)^{m-1}-m(m+1)(\cos x)^{m+1} \\
 & =(m-1)(m+1)(\cos x)^{m-1}-m(m+1)(\cos x)^{m+1} \\
 & =(m+1)(\cos x)^{m-1}\left[(m-1)-m\cos^2x\right]=0
\end{aligned}
$$

となる．これが $x$ によらず成り立つのは
$$
m+1=0 \\
\therefore m=-1
$$
である．

#### 2.

問I.1の結果より，式(1)の特殊解は

$$
y=(\cos{x})^{-1}=\frac{1}{\cos x}
$$

である．そこで，$x$を 変数とする関数 $u(x)$ を用いて

$$
y=\frac{u(x)}{\cos x}
$$

とすると，

$$
\begin{aligned}
 & \frac{dy}{dx}=\frac{u^{\prime}\cos x+u\sin x}{\cos^2x}, \\
 & \frac{d^2y}{dx^2}=\frac{[(u^{\prime\prime}\cos x-u^{\prime}\sin x)+(u^{\prime}\sin x+u\cos x)]\cos^2x+(u^{\prime}\cos x+u\sin x)\cdot2\cos x\sin x}{\cos^4x} \\
 & =\frac{(u^{\prime\prime}+u)\cos^2x+2(u^{\prime}\cos x+u\sin x)\sin x}{\cos^3x}
\end{aligned}
$$

となる．よって

$$
\begin{aligned}
u^{\prime\prime}\cos x+u^{\prime}\sin x & =0 \\
u^{\prime\prime} & =-u^{\prime}\tan x \\
\mathrm{u} & ^{\prime}=C_1\cos x\quad(\because\text{変数分離形}) \\
 & u=C_{1}\sin x+C_{2}
\end{aligned}
$$

となる．ただし，$C_{1},C_{2}$ は任意定数である．ゆえに

$$
\begin{aligned}
 & \mathrm{y}=\frac{u(x)}{\cos x} \\
 & =\frac{C_1\sin x+C_2}{\cos x} \\
 & =C_1\tan x+\frac{C_2}{\cos x}
\end{aligned}
$$

は解である． $tanx$ と $\frac{1}{\cos x}$ のロンスキアン $W$ を計算すると

$$
\begin{aligned}
W & =
\begin{vmatrix}
\tan x & \frac{1}{\cos x} \\
(\tan x)^{\prime} & \left(\frac{1}{\cos x}\right)^{\prime}
\end{vmatrix} \\
 & =
\begin{vmatrix}
\tan x & \frac{1}{\cos x} \\
\frac{1}{\cos^2x} & \frac{\sin x}{\cos^2x}
\end{vmatrix} \\
 & =\tan x\frac{\sin x}{\cos^2x}-\frac{1}{\cos x}\frac{1}{\cos^2x} \\
 & =\frac{\sin^2x-1}{\cos^3x} \\
 & =-\frac{1}{\cos x}\neq0
\end{aligned}
$$

となるから， $tanx$ と $\frac{1}{\cos x}$ は線形独立である．したがって，式(1)の一般解は

$$
y=C_1\tan x+\frac{C_2}{\cos x}
$$

である．

#### （前問の結果を用いない）別解
式(1)より

$$
\cos x\frac{d^2y}{dx^2}=\sin x\frac{dy}{dx}+\frac{y}{\cos x}
$$

である．両辺を $\cos x$ で割ると

$$
\begin{aligned}
\frac{d^2y}{dx^2} & =\tan x\frac{dy}{dx}+\frac{y}{\cos^2x} \\
 & =\frac{d}{dx}(y\tan x) \\
\frac{dy}{dx} & =y\tan x+C_1\quad(C_1:\text{任意定数}) \\
\frac{dy}{dx}-y\tan x & =C_{1}
\end{aligned}
$$

となる．両辺に $\cos x \begin{pmatrix} =\exp\int\tan xdx \end{pmatrix}$ を掛けると

$$
\begin{aligned}
\cos x\frac{dy}{dx}-y\sin x & =C_{1}\cos x \\
\frac{d}{dx}(y\cos x) & =C_1\cos x \\
y\cos x & =C_1\sin x+C_2\quad(C_2:\text{任意定数}) \\
\therefore & y=C_{1}\tan x+\frac{C_{2}}{\cos x}
\end{aligned}
$$

となる．

**解説:**
変数係数2階線形斉次常微分方程式です．
問I.1では基本解の一つを求めるための誘導がされています． $y=(\cos{x})^{m}x$ ではなく $y=(\cos{x})^{m}$ と書かれているのは，答である $m=-1$ のときに $y=(\cos{x})^{-1}x$書かれると逆余弦関数 $\arccos {x}$ と紛らわしいからでしょう．
問I.2では，問I.1の結果を用いてもう一つの基本解を求めます．

[変数係数2階線形微分方程式の解法](https://physnotes.jp/diffeq/2nd-lde/#%E5%A4%89%E6%95%B0%E4%BF%82%E6%95%B02%E9%9A%8E%E7%B7%9A%E5%BD%A2%E5%90%8C%E6%AC%A1%E5%BE%AE%E5%88%86%E6%96%B9%E7%A8%8B%E5%BC%8F)

このようにして求めた2つの解の線形結合が式(1)の解の全体を表せているのか，つまり2つの解は線形独立であるのかを確認するため，ロンスキアンが0ではないことを調べます．
実は，この微分方程式は特殊解がわからなくても別解のように1階線形非斉次微分方程式に帰着させて解くことができます．しかし，問題文には問I.1の結果を用いよという指示があるので，別解では満点をもらえないでしょう．


### II.
$y=x^2-1$ として、

$$
\begin{aligned}
I
&= \int_1^\infty x^5 e^{-x^4+2x^2-1} dx
\\
&= \int_1^\infty x^5 e^{-(x^2-1)^2} dx
\\
&= \int_0^\infty (y+1)^2 e^{-y^2} \frac{dy}{2}
\\
&= \frac{1}{2} \int_0^\infty (y^2+2y+1) e^{-y^2} dy
\end{aligned}
$$

ここで、

$$
\begin{aligned}
\int_0^\infty e^{-y^2} dy &= \frac{1}{2} \sqrt{\pi}
\\
\int_0^\infty y e^{-y^2} dy
&= - \frac{1}{2} \left[ e^{-y^2} \right]_0^\infty
= \frac{1}{2}
\\
\int_0^\infty y^2 e^{-y^2} dy
&= - \frac{1}{2} \int_0^\infty y \left( e^{-y^2} \right)' dy
= - \frac{1}{2} \left[ y e^{-y^2} \right]_0^\infty
+ \frac{1}{2} \int_0^\infty e^{-y^2} dy
= \frac{1}{4} \sqrt{\pi}
\end{aligned}
$$

なので、

$$
\begin{aligned}
I = \frac{4+3\pi}{8}
\end{aligned}
$$

### III.