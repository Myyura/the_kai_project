---
sidebar_label: '2017年度 数学 第2問'
sidebar_position: 2
---

# 東京大学 工学系研究科 2017年度 数学 第2問

## **Author**

## **Description**
次の3次正方行列式$A$に関する以下の問いに答えよ。

$$
\begin{aligned}
A = \begin{pmatrix}
3 & 0 & 1 \\ 
-1 & 2 & -1 \\
-2 & -2 & 1 \\ 
\end{pmatrix}
\end{aligned}
$$

### (I)
行列式$A$の固有値を全て求めよ。

### (II)
行列式$A^{n}$を求めよ。ただし,　$n$は自然数とする。

### (III)
3次正方行列式$B$は対角化可能で,　$AB = BA$の関係を満たすものとする。行列$A$の任意の固有ベクトル$p$は,　行列$B$の固有ベクトルでもあることを示せ。

### (IV)
$B^2 = A$の関係を満たす3次正方行列$B$を求めよ。ただし,　行列$B$はその固有値が全て正となる対角化可能な行列とする。

### (V)
3次正方行列$X$は対角化可能で,　$AX = XA$の関係を満たすものとする。$\text{tr}(AX) = d$のとき,　$\text{det}(AX)$の最大値を$d$の関数として求めよ。ただし,　$d$は正の実数とし,　行列$X$の固有値全て正とする。また,　$\text{tr}(M)$は正方行列$M$のトレース　(主対角成分の和)　であり,　$\text{det}(M)$は行列$M$の行列式である。

## **Kai**
### (I)
固有値$\lambda$をとおくと, $\mid A - \lambda I \mid = 0$ より,

$$
\begin{aligned}
\begin{vmatrix}
3 - \lambda & 0 & 1 \\
-1 & 2 - \lambda & -1 \\
-2 & -2 & 1 - \lambda
\end{vmatrix} = 0
\end{aligned}
$$

$$
\begin{aligned}
(3-\lambda)
\begin{vmatrix}
2 - \lambda & -1 \\
-2 & 1 - \lambda \\
\end{vmatrix} + 
\begin{vmatrix}
-1 & 2 - \lambda \\
-2 & -2 \\
\end{vmatrix} = 0
\end{aligned}
$$

$$
(3 - \lambda)\big((2 - \lambda)(1 - \lambda) - 2\big) + 2 + 2(2 - \lambda) = 0
$$

$$
(\lambda - 1)(\lambda - 2)(\lambda - 3) = 0
$$

$$
\lambda = 1 , 2, 3
$$

### (II)
行列$A$を対角化する。固有値$\lambda = 1 , 2, 3$に対応する固有ベクトルをそれぞれ$u_1,u_2,u_3$とすると,

$$
\begin{aligned}
(A - I)u_1 &= 
\begin{pmatrix}
2 & 0 & 1 \\
-1 & 1 & -1 \\
-2 & -2 & 0 \\
\end{pmatrix}u_1 = o \Rightarrow u_1 = 
\begin{pmatrix}
1 \\
-1 \\
-2 \\
\end{pmatrix} \\
(A - 2I)u_2 &=
\begin{pmatrix}
1 & 0 & 1 \\
-1 & 0 & -1 \\
-2 & -2 & -1 \\
\end{pmatrix}u_2 = o \Rightarrow u_2 =
\begin{pmatrix}
2 \\
-1 \\
-2 \\
\end{pmatrix} \\
(A - 3I)u_3 &=
\begin{pmatrix}
0 & 0 & 1 \\
-1 & -1 & -1 \\
-2 & -2 & -2 \\
\end{pmatrix}u_3 = o \Rightarrow u_3 =
\begin{pmatrix}
1 \\
-1 \\
0 \\
\end{pmatrix}
\end{aligned}
$$

となる。ここで行列$P$を ,

$$
P = 
\begin{pmatrix}
u_1 & u_2 & u_3 \\
\end{pmatrix} = 
\begin{pmatrix}
1 & 2 & 1 \\
-1 & -1 & -1 \\
-2 & -2 & 0 \\
\end{pmatrix}
$$

とおくと,　以下のように対角化できる。

$$
P^{-1}AP = 
\begin{pmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 3 \\
\end{pmatrix}
$$

行列$P^{-1}$を掃き出し法で計算する。

$$
\begin{aligned}
&\quad\begin{pmatrix}
1 & 2 & 1 & 1 & 0 & 0 \\
-1 & -1 & -1 & 0 & 1 & 0 \\
-2 & -2 & 0 & 0 & 0 & 1 \\
\end{pmatrix} \\
&\Rightarrow 
\begin{pmatrix}
1 & 2 & 1 & 1 & 0 & 0 \\
0 & 1 & 0 & 1 & 1 & 0 \\
0 & 2 & 2 & 2 & 0 & 1 \\
\end{pmatrix} \\
&\Rightarrow
\begin{pmatrix}
1 & 0 & 1 & -1 & -2 & 0 \\
0 & 1 & 0 & 1 & 1 & 0 \\
0 & 0 & 2 & 0 & -2 & 1 \\
\end{pmatrix} \\
&\Rightarrow
\begin{pmatrix}
1 & 0 & 0 & -1 & -1 & -1/2 \\
0 & 1 & 0 & 1 & 1 & 0 \\
0 & 0 & 1 & 0 & -1 & 1/2 \\
\end{pmatrix} \\
\therefore  \quad &P^{-1} = \frac{1}{2}
\begin{pmatrix}
-2 & -2 & -1 \\
2 & 2 & 0 \\
0 & -2 & 1 \\
\end{pmatrix}
\end{aligned}
$$

よって$A^{n}$は以下のように計算できる。

$$
\begin{aligned}
A &= P
\begin{pmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 3 \\
\end{pmatrix}P^{-1} \\
A^{n} &= P
\begin{pmatrix}
1 & 0 & 0 \\
0 & 2^{n} & 0 \\
0 & 0 & 3^{n} \\
\end{pmatrix}P^{-1} \\
&=\frac{1}{2}
\begin{pmatrix}
1 & 2 & 1 \\
-1 & -1 & -1 \\
-2 & -2 & 0 \\
\end{pmatrix}
\begin{pmatrix}
1 & 0 & 0 \\
0 & 2^{n} & 0 \\
0 & 0 & 3^{n} \\
\end{pmatrix}
\begin{pmatrix}
-2 & -2 & -1 \\
2 & 2 & 0 \\
0 & -2 & 1 \\
\end{pmatrix} \\
&=\frac{1}{2}
\begin{pmatrix}
1 & 2 \cdot 2^{n} & 3^{n} \\
-1 & -2^{n} & -3^{n} \\
-2 & -2 \cdot 2^{n} & 0 \\
\end{pmatrix}
\begin{pmatrix}
-2 & -2 & -1 \\
2 & 2 & 0 \\
0 & -2 & 1 \\
\end{pmatrix} \\
&=\frac{1}{2}
\begin{pmatrix}
-2 + 4 \cdot 2^{n} & -2 + 4 \cdot 2^{n} - 2 \cdot 3^{n} & -1 + 3^{n} \\
2 - 2 \cdot 2^{n} & 2 - 2 \cdot 2^{n} + 3^{n} & 1 - 3^{n} \\
4 - 4 \cdot 2^{n} & 4 - 4 \cdot 2^{n} & 2 \\
\end{pmatrix}\\
&=
\begin{pmatrix}
-1 + 2 \cdot 2^{n} & -1 + 2 \cdot 2^{n} - 3^{n} & (-1 + 3^{n})/2 \\
1 - 2^{n} & 1 - 2^{n} + 3^{n} & (1 - 3^{n})/2 \\
2 - 2 \cdot 2^{n} & 2 - 2 \cdot 2^{n} & 1 \\
\end{pmatrix}
\end{aligned}
$$

### (III)
$p$が行列$A$の固有値$\lambda$に対する固有ベクトルのとき,

$$
Ap = \lambda p
$$

左から$B$を掛けて式変形すると,

$$
\begin{aligned}
BAp &= \lambda Bp \\
ABp &= \lambda Bp \\
A(Bp) &= \lambda(Bp)
\end{aligned}
$$

となり,　これはベクトル $Bp$ が $A$ の固有値 $\lambda$ に対する固有ベクトルの1つであることを示す。ある固有値に対する固有ベクトルの集まりはすべて平行であるから,　適当な定数 $c$ により,　

$$
Bp = cp
$$

とかける。これは,　$p$が行列$B$の固有値$c$に対する固有ベクトルであることを意味し,　題意のことが示された。

### (IV)
$B$の正の固有値を$b_1,b_2,b_3$とおくと,　(III)の性質より(II)の$P$を用いて,　

$$
P^{-1}BP = 
\begin{pmatrix}
b_1 & 0 & 0 \\
0 & b_2 & 0 \\
0 & 0 & b_3 \\
\end{pmatrix}
$$

と対角化できる。$B^2 = A$より,

$$
P^{-1}B^2P = 
\begin{pmatrix}
b_1^2 & 0 & 0 \\
0 & b_2^2 & 0 \\
0 & 0 & b_3^2 \\
\end{pmatrix}
$$

$$
P^{-1}AP = 
\begin{pmatrix}
b_1^2 & 0 & 0 \\
0 & b_2^2 & 0 \\
0 & 0 & b_3^2 \\
\end{pmatrix} = 
\begin{pmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 3 \\
\end{pmatrix} 
$$

$$
\therefore b_1 = 1 ,b_2 = \sqrt{2} ,b_3 = \sqrt{3}
$$

よって,

$$
\begin{aligned}
B &= P
\begin{pmatrix}
1 & 0 & 0 \\
0 & \sqrt{2} & 0 \\
0 & 0 & \sqrt{3} \\
\end{pmatrix} P^{-1} \\
&=\frac{1}{2}
\begin{pmatrix}
1 & 2 & 1 \\
-1 & -1 & -1 \\
-2 & -2 & 0 \\
\end{pmatrix}
\begin{pmatrix}
1 & 0 & 0\\
0 & \sqrt{2} & 0 \\
0 & 0 & \sqrt{3} \\
\end{pmatrix}
\begin{pmatrix}
-2 & -2 & -1 \\
2 & 2 & 0 \\
0 & -2 & 1\\
\end{pmatrix}\\
&=\frac{1}{2}
\begin{pmatrix}
1 & 2\sqrt{2} & \sqrt{3} \\
-1 & -\sqrt{2} & -\sqrt{3} \\
-2 & -2\sqrt{2} & 0 \\
\end{pmatrix}
\begin{pmatrix}
-2 & -2 & -1 \\
2 & 2 & 0 \\
0 & -2 & 1\\
\end{pmatrix}\\
&=\frac{1}{2}
\begin{pmatrix}
-2 + 4\sqrt{2} & -2 + 4\sqrt{2} - 2 \sqrt{3} & -1 + \sqrt{3} \\
2 - 2 \sqrt{2} & 2 - 2\sqrt{2} + 2\sqrt{3} & 1 - \sqrt{3} \\
4 - 4\sqrt{2} & 4 - 4\sqrt{2} & 2 \\
\end{pmatrix}\\
&=\frac{1}{2}
\begin{pmatrix}
-1 + 2\sqrt{2} & -1 + 2\sqrt{2} - \sqrt{3} & (-1 + \sqrt{3})/2 \\
1 - \sqrt{2} & 1 - \sqrt{2} + \sqrt{3} & (1 - \sqrt{3})/2 \\
2 - 2\sqrt{2} & 2 - 2\sqrt{2} & 1 \\
\end{pmatrix}\\
\end{aligned}
$$

### (V)
$X$の正の固有値を$x_1,x_2,x_3$とおくと,　(III)の性質より(II)の$P$を用いて,　

$$
P^{-1}XP = 
\begin{pmatrix}
x_1 & 0 & 0 \\
0 & x_2 & 0 \\
0 & 0 & x_3 \\
\end{pmatrix} (\equiv D)
$$

と対角化できる。

$$
\begin{aligned}
(P^{-1}AP)(P^{-1}XP) &= 
\begin{pmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 3 \\
\end{pmatrix}
\begin{pmatrix}
x_1 & 0 & 0 \\
0 & x_2 & 0 \\
0 & 0 & x_3 \\
\end{pmatrix}\\
P^{-1}(AX)P &=
\begin{pmatrix}
x_1 & 0 & 0 \\
0 & 2x_2 & 0 \\
0 & 0 & 3x_3 \\
\end{pmatrix}\\
\text{tr}(P^{-1}(AX)P) &= x_1 + x_2 + x_3
\end{aligned}
$$

ここでトレースの性質,　$\text{tr}(P^{-1}AP) = \text{tr}(PP^{-1}A) = \text{tr}A$ から,　

$$
\text{tr}(AX) = x_1 + 2x_2 + 3x_3 = d 
$$

である。$X = PDP^{-1}$ 

$$
\begin{aligned}
\text{det}(AX) &= \text{det}(A) \text{det}(X) \\
&=\text{det}(A) \text{det}(PDP^{-1}) \\
&= \text{det}(A) \text{det}(P) \text{det}(D) \text{det}(P^{-1})
\end{aligned}
$$

ここで,　$\text{det}({P^{-1}}) = 1 / \text{det}(P), \text{det}(A) = 1 + 2 + 3 = 6$ より,

$$
\text{AX} = 6x_1x_2x_3
$$

$x_1 + 2x_2 + 3x_3 = d$の関係より,

$$
\text{det}(AX) = 6(d - 2x_2 -3x_3)x_2x_3 \quad(\equiv f(x_2,x_3))
$$

の最大値を求めよ。$f(x_2,x_3)$は,

$$
\begin{aligned}
\frac{\partial f}{\partial x_2} &= 6dx_3 - 24x_2x_3 - 18x_3^2 = 0 \\
\frac{\partial f}{\partial x_3} &= 6dx_2 -36x_2x_3 - 12x_2^2 = 0 \\
\end{aligned}
$$

より, $(x_2,x_3) = (d/6,d/9)$ で極値を取る。このとき, 

$$
\begin{aligned}
& \quad \begin{vmatrix}
\frac{\partial ^2 f}{\partial x_2^2} & \frac{\partial ^2 f}{\partial x_2 \partial x_3} \\
\frac{\partial ^2 f}{\partial x_3 \partial x_2} & \frac{\partial ^2 f}{\partial x_3^2} \\
\end{vmatrix}\\
&= 
\begin{vmatrix}
-24x_3 & 6d - 24x_2 - 36x_3 \\
6d - 24x_2 -36x_3 & -36x_2 \\
\end{vmatrix}\\
&=12d^2 > 0
\end{aligned}
$$

となり,　$\frac{\partial ^2 f}{\partial x_2^2} \bigg|_{(\frac{d}{6},\frac{d}{9})} = -24 \cdot \frac{d}{9} < 0$であるから,　$f(d/6,d/9)$は極大値である。したがって,　求める$\text{det}(AX)$の最大値は,　

$$
f(d/6,d/9) = 6\big(d - \frac{d}{3} - \frac{d}{3}\big) \cdot \frac{d}{6} \cdot \frac{d}{9} = \frac{d^3}{27}
$$