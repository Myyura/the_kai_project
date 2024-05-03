---
comments: false
description: 東京大学 大学院 工学系研究科 2022年度 数学2
keywords: Tokyo-University, 2022
---

## Source
[東京大学 大学院 工学系研究科 2022年度 数学2 (主に「ベクトル・行列・固有値（線形代数）」と「曲線・曲面」)](https://www.t.u-tokyo.ac.jp/soe/admission/general-past)

## Description

## Kai
### I.
#### 1.

$$
\begin{align}
AB
&= \begin{pmatrix} 36 & -18 & 0 \\ -18 & 54 & -18 \\ 0 & -18 & 36 \end{pmatrix}
\\
&= 18 \begin{pmatrix} 2 & -1 & 0 \\ -1 & 3 & -1 \\ 0 & -1 & 2 \end{pmatrix}
\end{align}
$$

#### 2.
2つの $n$ 次実対称行列 $C, D$ を考え、 $CD=DC$ が成り立つとする。
また、どちらもそれぞれ $n$ 個の固有値は互いに異なるとする。

$C$ の固有値 $c$ に属する固有ベクトルを $\boldsymbol{w}$ とすると、

$$
\begin{align}
C \boldsymbol{w} &= c \boldsymbol{w}
\\
CD \boldsymbol{w}
&= DC \boldsymbol{w}
\\
&= Dc \boldsymbol{w}
\\
&= cD \boldsymbol{w}
\end{align}
$$

であり、 $D \boldsymbol{w}$ も $C$ の固有値 $c$ に属する固有ベクトルであることがわかる。
$C$ の $c$ に属する固有空間は1次元なので、

$$
\begin{align}
D \boldsymbol{w} = d \boldsymbol{w}
\end{align}
$$

と書ける。
つまり、 $\boldsymbol{w}$ は $D$ の固有ベクトルでもある。
同様にして、 $D$ の固有ベクトルは $C$ の固有ベクトルでもある。

$C$ の固有値 $c_1, c_2, \cdots, c_n$ に属する規格化された固有ベクトル
$\boldsymbol{w}_1, \boldsymbol{w}_2, \cdots, \boldsymbol{w}_n$ は
互いに直交し、直交行列

$$
\begin{align}
P =
\begin{pmatrix} \boldsymbol{w}_1 & \boldsymbol{w}_2 & \cdots & \boldsymbol{w}_n \end{pmatrix}
\end{align}
$$

によって $C$ は対角化される。
$\boldsymbol{w}_1, \boldsymbol{w}_2, \cdots, \boldsymbol{w}_n$ は、
$D$ の $n$ 個の互いに直交する（1次独立な）固有ベクトルでもあるので、
$P$ によって $D$ も対角化される。
つまり、 $C$ と $D$ は同時対角化可能である。

#### 3.
$A$ の固有値を $\lambda$ とすると、

$$
\begin{align}
0
&= \det \begin{pmatrix}
7 - \lambda & -2 & 1 \\ -2 & 10 - \lambda & -2 \\ 1 & -2 & 7 - \lambda
\end{pmatrix}
\\
&= - (\lambda-6)^2 (\lambda-12)
\\
\therefore \ \ 
\lambda &= 6, 12
\end{align}
$$

である。

$A$ の固有値 $12$ に属する固有ベクトルを求めるために、

$$
\begin{align}
\begin{pmatrix} -5 & -2 & 1 \\ -2 & -2 & -2 \\ 1 & -2 & -5 \end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{align}
$$

とおくと、 $-5x-2y+z=0, x+y+z=0, x-2y-5z=0$ であるから、例えば、

$$
\begin{align}
\boldsymbol{x}_1
= \frac{1}{\sqrt{6}} \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}
\end{align}
$$

が固有ベクトルである。

$A$ の固有値 $6$ に属する固有空間を求めるために、

$$
\begin{align}
\begin{pmatrix} 1 & -2 & 1 \\ -2 & 4 & -2 \\ 1 & -2 & 1 \end{pmatrix}
\begin{pmatrix} x \\ y \\ z \end{pmatrix}
=
\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}
\end{align}
$$

とおくと、 $x-2y+z=0$ であるから、

$$
\begin{align}
\boldsymbol{x}_2
= \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}
, \ \ 
\boldsymbol{x}_3
= \frac{1}{\sqrt{6}} \begin{pmatrix} 2 \\ 1 \\ 0 \end{pmatrix}
\end{align}
$$

を基底とする空間が固有空間である。

$B$ の固有値を $\mu$ とすると、

$$
\begin{align}
0
&= \det \begin{pmatrix}
5-\mu & -1 & -1 \\ -1 & 5-\mu & -1 \\ -1 & -1 & 5-\mu
\end{pmatrix}
\\
&= - (\mu-3)(\mu-6)^2
\\
\therefore \ \ 
\lambda &= 3, 6
\end{align}
$$

である。

上と同様に考えると、

$$
\begin{align}
\boldsymbol{y}_1
= \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}
\end{align}
$$

は $B$ の固有値 $3$ に属する固有ベクトルであり、

$$
\begin{align}
\boldsymbol{y}_2
= \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ -1 \\ 0 \end{pmatrix}
, \ \ 
\boldsymbol{y}_3
= \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}
\end{align}
$$

を基底とする空間が $B$ の固有値 $6$ に属する固有空間である。

よって、$\boldsymbol{x}_1$ について、

$$
\begin{align}
A \boldsymbol{x}_1 = 12 \boldsymbol{x}_1
, \ \ 
B \boldsymbol{x}_1 = 6 \boldsymbol{x}_1
\end{align}
$$

が成り立ち、$\boldsymbol{y}_1$ について、

$$
\begin{align}
A \boldsymbol{y}_1 = 6 \boldsymbol{y}_1
, \ \ 
B \boldsymbol{y}_1 = 3 \boldsymbol{y}_1
\end{align}
$$

が成り立つ。

さらに、 $\boldsymbol{x}_1, \boldsymbol{y}_1$ に直交する規格化されたベクトルとして、

$$
\begin{align}
\boldsymbol{z}
= \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}
\end{align}
$$

を考えると、

$$
\begin{align}
A \boldsymbol{z} = 6 \boldsymbol{z}
, \ \ 
B \boldsymbol{z} = 6 \boldsymbol{z}
\end{align}
$$

が成り立つ。
つまり、6つのベクトル $\pm \boldsymbol{x}_1, \pm \boldsymbol{y}_1, \pm \boldsymbol{z}$は、規格化された同時固有ベクトルである。（これら以外にはないことは次のようにしてわかる。
$\alpha \ne 0, \beta \neq 0, \gamma \neq 0$ として、
$\alpha \boldsymbol{x}_1 + \beta \boldsymbol{y}_1$ は
$A,B$ どちらの固有ベクトルでもなく、
$\alpha \boldsymbol{x}_1 + \gamma \boldsymbol{z}$ は
$B$ の固有ベクトルだが $A$ の固有ベクトルではなく、
$\beta \boldsymbol{y}_1 + \gamma \boldsymbol{z}$ は
$A$ の固有ベクトルだが $B$ の固有ベクトルではなく、
$\alpha \boldsymbol{x}_1 + \beta \boldsymbol{y}_1 + \gamma \boldsymbol{z}$ は
$A,B$ どちらの固有ベクトルでもない。）

以上より、

$$
\begin{align}
\left( \boldsymbol{v}, a, b \right)
=
&\left( \frac{1}{\sqrt{6}} \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}, 12, 6 \right)
, \ \ 
\left( -\frac{1}{\sqrt{6}} \begin{pmatrix} 1 \\ -2 \\ 1 \end{pmatrix}, 12, 6 \right)
, \\
&\left( \frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}, 6, 3 \right)
, \ \ 
\left( -\frac{1}{\sqrt{3}} \begin{pmatrix} 1 \\ 1 \\ 1 \end{pmatrix}, 6, 3 \right)
, \\
&\left( \frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}, 6, 6 \right)
, \ \ 
\left( -\frac{1}{\sqrt{2}} \begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}, 6, 6 \right)
\end{align}
$$

を得る。

### II.
#### 1.

$$
\begin{align}
A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 2 \\ 0 & 2 & 2 \end{pmatrix}
, \ \ 
\boldsymbol{b} = \frac{1}{2 \sqrt{2}} \begin{pmatrix} 0 \\ -1 \\ 1 \end{pmatrix}
\end{align}
$$

#### 2.
$A$ の固有値を $\lambda$ とすると、

$$
\begin{align}
0
&= \det
\begin{pmatrix} 2-\lambda & 0 & 0 \\ 0 & 2-\lambda & 2 \\ 0 & 2 & 2-\lambda \end{pmatrix}
\\
&= - \lambda(\lambda-2)(\lambda-4)
\end{align}
$$

となるので、

$$
\begin{align}
d_1 = 4, d_2 = 2, d_3 = 0
\end{align}
$$

つまり、

$$
\begin{align}
D
= \begin{pmatrix} 4 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 0 \end{pmatrix}
\end{align}
$$

である。

固有値 $d_1, d_2, d_3$ に属する規格化された固有ベクトルは、それぞれ、

$$
\begin{align}
\boldsymbol{v}_1 = \frac{1}{\sqrt{2}} \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}
, \ \ 
\boldsymbol{v}_2 = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}
, \ \ 
\boldsymbol{v}_3 = \frac{1}{\sqrt{2}} \begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}
\end{align}
$$

なので、

$$
\begin{align}
P^T
= \frac{1}{\sqrt{2}} \begin{pmatrix} 0 & \sqrt{2} & 0 \\ 1 & 0 & 1 \\ 1 & 0 & -1 \end{pmatrix}
, \ \ 
P
= \frac{1}{\sqrt{2}} \begin{pmatrix} 0 & 1 & 1 \\ \sqrt{2} & 0 & 0 \\ 0 & 1 & -1 \end{pmatrix}
\end{align}
$$

とすると、 $A = P^T DP$ となる。

#### 3.

$$
\begin{align}
f(x,y,z)
&=
\begin{pmatrix} x & y & z \end{pmatrix} A \begin{pmatrix} x \\ y \\ z \end{pmatrix}
+ 2 \boldsymbol{b}^T \begin{pmatrix} x \\ y \\ z \end{pmatrix}
\\
&=
\begin{pmatrix} x & y & z \end{pmatrix} P^T P A P^T P \begin{pmatrix} x \\ y \\ z \end{pmatrix}
+ 2 \boldsymbol{b}^T P^T P \begin{pmatrix} x \\ y \\ z \end{pmatrix}
\\
&=
\begin{pmatrix} X & Y & Z \end{pmatrix} D \begin{pmatrix} X \\ Y \\ Z \end{pmatrix}
+ 2 \boldsymbol{b}^T P^T \begin{pmatrix} X \\ Y \\ Z \end{pmatrix}
\\
&=
4X^2+2Y^2-Z
\end{align}
$$

#### 4.
平面 $y-z-\sqrt{2}=0$ は次のように書き直せる：

$$
\begin{align}
\begin{pmatrix} 0 & 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix}
&= \sqrt{2}
\\
\begin{pmatrix} 0 & 1 & -1 \end{pmatrix} P^T \begin{pmatrix} X \\ Y \\ Z \end{pmatrix}
&= \sqrt{2}
\end{align}
$$

これを整理して $Z=1$ を得る。

また、 3. で得た

$$
\begin{align}
4X^2 + 2Y^2 - Z = 0
\end{align}
$$

は、 $Z (\gt 0)$ を固定すると、 $X,Y$ に関する楕円の方程式であり、その面積 $S(Z)$ は、

$$
\begin{align}
S(Z)
= \pi \sqrt{\frac{Z}{4}} \sqrt{\frac{Z}{2}}
= \frac{\pi}{2 \sqrt{2}} Z
\end{align}
$$

である。

よって、求める体積は、

$$
\begin{align}
\int_0^1 S(Z) dZ
= \frac{\pi}{2 \sqrt{2}} \int_0^1 Z dZ
= \frac{\pi}{4 \sqrt{2}}
\end{align}
$$

である。