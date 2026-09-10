---
sidebar_label: '数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Vector-Calculus.Parametric-Surface
  - Mathematics.Vector-Calculus.Surface-Normal
  - Mathematics.Linear-Algebra.Rotation-Matrix-and-Axis-Angle
  - Mathematics.Calculus.Arc-Length
  - Mathematics.Geometry.Gaussian-Curvature
---

# 東京大学 工学系研究科 2018年度 数学 第4問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I.
3次元直交座標系において、実数の媒介変数 $u,v$ を消去し、次の曲面の方程式と概形を求めよ。ただし $a,b,c$ は零でない実定数とする。

1. $x=au\cosh v$，$y=bu\sinh v$，$z=u^2$。
2. $\displaystyle x=a\frac{u-v}{u+v}$，$\displaystyle y=b\frac{uv+1}{u+v}$，$\displaystyle z=c\frac{uv-1}{u+v}$。

### II.
実定数 $a,b$ に対して、曲面 $S:z=x^2-2y^2+ax+by$ を考える。

1. $S$ 上の点 $(x,y,z)$ における法線ベクトルを求めよ。
2. $S$ を $z$ 軸の周りに正方向へ $\pi/4$ 回転した曲面 $T$ の方程式を求めよ。正方向は $z$ 軸の正側から原点を見たときの反時計回りとする。
3. $S$ のうち $-1\le x,y\le1$ の部分を $S'$ とする。$S'$ の $yz$ 平面への正射影の面積を求めよ。
4. $a=b=0$ のとき、$S'$ の周の長さを求めよ。
5. $a=b=0$ のとき、点 $(0,1/4,-1/8)$ における $S$ の Gauss 曲率を求めよ。

#### 题目描述

##### I.
在三维直角坐标系中，消去实参数 $u,v$，求下列曲面的方程并画出概形；$a,b,c$ 为非零实常数。

1. $x=au\cosh v$，$y=bu\sinh v$，$z=u^2$。
2. $\displaystyle x=a\frac{u-v}{u+v}$，$\displaystyle y=b\frac{uv+1}{u+v}$，$\displaystyle z=c\frac{uv-1}{u+v}$。

##### II.
设 $S:z=x^2-2y^2+ax+by$，$a,b$ 为实常数。

1. 求 $S$ 在 $(x,y,z)$ 的法向量。
2. 将 $S$ 绕 $z$ 轴正向旋转 $\pi/4$，求所得曲面 $T$ 的方程。正向为从 $z$ 轴正侧看向原点时逆时针方向。
3. $S'$ 为 $S$ 中 $-1\le x,y\le1$ 的部分，求其在 $yz$ 平面的投影面积。
4. 当 $a=b=0$ 时，求 $S'$ 的边界总长度。
5. 当 $a=b=0$ 时，求 $S$ 在 $(0,1/4,-1/8)$ 的 Gauss 曲率。

## **Kai**

### I.

1. $\cosh^2v-\sinh^2v=1$ より

$$
\boxed{\frac{x^2}{a^2}-\frac{y^2}{b^2}=z}.
$$

この方程式は双曲放物面を表す。実数の媒介変数が実際に覆う範囲は $z>0$ の部分と原点である。$u=0$ では原点のみを得る。

2. $X=x/a$、$Y=y/b$、$Z=z/c$ とおくと

$$
X^2+Y^2-Z^2=\frac{(u-v)^2+4uv}{(u+v)^2}=1.
$$

よって

$$
\boxed{\frac{x^2}{a^2}+\frac{y^2}{b^2}-\frac{z^2}{c^2}=1},\qquad
\frac yb\ne\frac zc.
$$

これは $z$ 軸を軸とする一葉双曲面である。ただし媒介変数表示には、$y/b=z/c$ を満たす2本の直線母線は含まれない。

![規格化した座標による媒介変数曲面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2018/math_4_surfaces.svg)

### II.

1. $F=x^2-2y^2+ax+by-z$ とおけば、法線ベクトルとして

$$
\boxed{\boldsymbol n=(2x+a,-4y+b,-1)^T}.
$$

2. 回転前の座標 $((x+y)/\sqrt2,(-x+y)/\sqrt2,z)$ を元の方程式へ代入して

$$
\boxed{z=-\frac{x^2+y^2}{2}+3xy+\frac{a-b}{\sqrt2}x+\frac{a+b}{\sqrt2}y}.
$$

3. 各 $y\in[-1,1]$ に対し、正射影の鉛直方向の幅は $[-1,1]$ 上の $h(x)=x^2+ax$ の最大値と最小値の差である。面積はその差の2倍なので、

$$
\boxed{A=\begin{cases}
2(1+|a|+a^2/4),&|a|\le2,\\
4|a|,&|a|\ge2.
\end{cases}}
$$

4. 四つの辺は $z=x^2-2$ の放物線2本と $z=1-2y^2$ の放物線2本に対応する。よって

$$
\begin{aligned}
L&=2\int_{-1}^1\sqrt{1+4x^2}\,dx+2\int_{-1}^1\sqrt{1+16y^2}\,dy\\
&=\boxed{2\sqrt5+\log(2+\sqrt5)+2\sqrt{17}+\tfrac12\log(4+\sqrt{17})}.
\end{aligned}
$$

5. $z=f(x,y)=x^2-2y^2$ に対して

$$
K=\frac{f_{xx}f_{yy}-f_{xy}^2}{(1+f_x^2+f_y^2)^2}
=-\frac8{(1+4x^2+16y^2)^2}.
$$

指定された点を代入すると $\boxed{K=-2}$ を得る。
