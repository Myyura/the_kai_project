---
comments: false
description: 東京大学 大学院 情報理工学研究科 2022年度 数学 第1問
keywords: Tokyo-University, 2022
---

## **Source**
東京大学 大学院 情報理工学研究科 2022年度 数学 第1問

## **Description**
以下の$x,y,z\in \mathbb{R}$関する複数の条件を考える．

$$
\left\{
\begin{array}{llll}
0 < z-xy <1 \\
0 < z-(x+y)^2 <-xy
\end{array} \right.
$$

$\Omega$を上記の条件を満たす$z$が一つでも存在するような点$(x,y)$の集合とする．$\Omega$は三次元デカルト座標系において上記の条件を満たすような点$(x,y,z)$の集合$xy$平面上に正射影した図形とも解釈できる．以下の問いに答えよ．

(1)、$\Omega$を$x$と$y$に関する不等式で表現せよ．

(2)、集合$\Omega$を$xy$平面上に図示せよ．図形の境界が$x$軸,$y$軸と交わる場合は,その交点の座標も明記せよ．

(3)、集合$\Omega$の境界の湾曲した区間は、単位円の複数の円弧をある線形変換$\mathbf{X}$で変換した図形になっている．このような$\mathbf{X}$を一つ求めよ．ただし,単位円上の点$(1,0)$は、湾曲した区間の最も曲率の高い点に変換されなければならない．

(4)、(3)で求めた$\mathbf{X}$の行列式を求めよ．

(5)、集合$\Omega$の面積を求めよ．ただし、図形を線形変換した場合の面積変化率は、その線形変換の行列式の絶対値に等しいことを用いてもよい．

## **Kai**
### (1)
与えられた2つの不等式は、次のように変形できる：

$$
\begin{align}
xy &\lt z \lt xy+1
\\
x^2+y^2+2xy &\lt z \lt x^2+y^2+xy
\end{align}
$$

任意の $x,y$ について1つ目の不等式を満たす $z$ が存在する。

2つ目の不等式を満たす $z$ が存在する条件は $xy \lt 0$ である。

上の連立不等式を満たす $z$ が存在するためには、

$$
\begin{align}
xy &\lt x^2+y^2+xy
\\
x^2+y^2+2xy &\lt  xy+1
\end{align}
$$

も必要であるが、前者は $(x,y) \neq (0,0)$ を意味し、

後者は $x^2+y^2+xy \lt 1$ を意味する。

まとめると、求める不等式は

$$
\begin{align}
xy \lt 0
, \ \ 
x^2+y^2+xy \lt 1
\end{align}
$$

である。

### (2)
$xy \lt 0$ は、xy平面の第2象限と第4象限を表す。

$x^2+y^2+xy \lt 1$ は、原点を中心とし、
直線 $y=-x$ 上に長軸があり、直線 $y=x$ 上に短軸があり、
長径が $\sqrt{2}$ であり、短径が $\sqrt{2/3}$ であるような楕円である。
なぜなら、

$$
\begin{align}
\begin{pmatrix} x \\ y \end{pmatrix}
&= \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}
\begin{pmatrix} x' \\ y' \end{pmatrix}
\end{align}
$$

とすると、

$$
\begin{align}
x^2 + y^2 + xy
&= \frac{1}{2} x'^2 + \frac{3}{2} y'^2
\\
&= \frac{x'^2}{2} + \frac{y'^2}{\frac{2}{3}}
\end{align}
$$

となるからである。

$\Omega$ の境界のうち、

x 軸上にあるのは $(-1,0)$ と $(1,0)$ を結ぶ線分であり、

y 軸上にあるのは $(0,-1)$ と $(0,1)$ を結ぶ線分である。

### (3)
(2) で考えた $(x,y)$ と $(x',y')$ の対応に加えて、

$$
\begin{align}
x' = \sqrt{2} x''
, \ \ 
y' = \sqrt{\frac{2}{3}} y''
\end{align}
$$

を考えると、

$$
\begin{align}
x^2 + y^2 + xy
&= \frac{x'^2}{2} + \frac{y'^2}{\frac{2}{3}}
\\
&= x''^2 + y''^2
\end{align}
$$

となる。
これは、楕円 $x^2+y^2+xy=1$ の最も曲率の高い点（の1つ）
$(x,y)=(1/\sqrt{3}, -1/\sqrt{3})$ と
単位円 $x''^2+y''^2=1$ 上の点 $(x'',y'')=(1,0)$ を対応付ける。
よって、求める線形変換行列 $X$ は、

$$
\begin{align}
X
&= \frac{1}{\sqrt{2}} \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}
\begin{pmatrix} \sqrt{2} & 0 \\ 0 & \sqrt{\frac{2}{3}} \end{pmatrix}
\\
&= \begin{pmatrix}
1 & \frac{1}{\sqrt{3}} \\ -1 & \frac{2}{\sqrt{3}}
\end{pmatrix}
\end{align}
$$

とすればよい。

### (4)

$$
\begin{align}
\det X = \frac{2}{\sqrt{3}}
\end{align}
$$

### (5)

$$
\begin{align}
X^{-1}
&= \frac{1}{2} \begin{pmatrix} 1 & -1 \\ \sqrt{3} & \sqrt{3} \end{pmatrix}
\end{align}
$$

なので、 $(x,y)=(1,0)$ に対応するのは $(x'',y'')=(1/2, \sqrt{3}/2)$ である。

つまり、 $\Omega$ に対応するのは単位円の内部の $2/3$ である。

よって、 $\Omega$ の面積は

$$
\begin{align}
\pi \cdot \frac{2}{3} \cdot \frac{2}{\sqrt{3}}
= \frac{4 \pi}{3 \sqrt{3}}
\end{align}
$$