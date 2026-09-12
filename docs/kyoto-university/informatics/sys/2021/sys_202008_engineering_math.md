---
sidebar_label: 2020年8月実施 工業数学
tags:
  - Kyoto-University
  - Mathematics.Complex-Analysis.Complex-Exponential-and-Polar-Form
  - Mathematics.Complex-Analysis.Taylor-Series-and-Radius-of-Convergence
  - Mathematics.Complex-Analysis.Real-Integral-by-Residues
  - Mathematics.Complex-Analysis.Harmonic-Functions-and-Harmonic-Conjugates
---
# 京都大学 情報学研究科 システム科学専攻 2020年8月実施 工業数学

## **Author**
犬 (finalized by 祭音Myyura with assistance from GPT 6 Astra)

## **Description**

$i$ は虚数単位、$e$ は自然対数の底、$\mathbb C$ は複素数全体、$\overline z$ は $z$ の共役複素数とする。

### 問題1
$f(z)=\sin(1/(z^2+3z+1+3i))$ について答えよ。

(1) $z=x+iy$ ($x,y\in\mathbb R$) とおく。$f$ の実部と虚部を $x,y$ の関数で表せ。

(2) $f$ がべき級数展開を持ち、その収束半径が $\sqrt2$ となる実軸上の点をすべて求めよ。

### 問題2
図の積分路（頂点 $-R,R,R+i\pi,-R+i\pi$ を反時計回りに通る長方形）に沿った複素積分を用いて

$$
\int_{-\infty}^\infty\frac{\cos x}{\cosh x}\,dx
$$

を求めよ。
![積分路](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kyoto-university/informatics/sys/2021/sys_202008_engineering_math_rectangle.svg)

### 問題3
領域 $\Omega\subset\mathbb C$ 上の複素関数 $f(z)$ を $z=x+iy$ によって $x,y$ の関数と見たとき、二階までの偏導関数が存在して連続であり、$f_{xx}+f_{yy}=0$ を満たすなら調和関数と呼ぶ。

(1) $f(z)=e^z$ が $\mathbb C$ 上調和であることを示せ。

(2) $\Omega$ 上の正則関数が調和であることを示せ。

(3) $f,f^2$ がともに $\Omega$ 上調和で、$f_x,f_y$ がいずれも零にならないとする。$f$ または $\overline f$ のいずれかが $\Omega$ 上正則であることを示せ。

#### 题目描述

$i$ 为虚数单位，$e$ 为自然对数的底，$\mathbb C$ 为复数集，$\overline z$ 表示共轭。

问题 1：令 $f(z)=\sin(1/(z^2+3z+1+3i))$。

（1）写 $z=x+iy$，用 $x,y$ 表示 $f$ 的实部和虚部。

（2）求实轴上全部满足 $f$ 在该点的幂级数展开收敛半径为 $\sqrt2$ 的中心点。

问题 2：利用上图逆时针矩形路径（顶点为 $-R,R,R+i\pi,-R+i\pi$）上的复积分，求 $\int_{-\infty}^\infty\cos x/\cosh x\,dx$。

问题 3：若复函数 $f(z)$（$z=x+iy$）在区域 $\Omega$ 上有连续的二阶偏导数，且 $f_{xx}+f_{yy}=0$，则称它为调和函数。

（1）证明 $e^z$ 在复平面上调和。（2）证明区域内的全纯函数是调和函数。（3）若 $f,f^2$ 都调和，而且 $f_x,f_y$ 处处非零，证明 $f$ 或其共轭 $\overline f$ 至少有一个在整个 $\Omega$ 上全纯。

## **Kai**

### 問題1
(1) $A=x^2-y^2+3x+1,B=2xy+3y+3$、$U=A/(A^2+B^2),V=B/(A^2+B^2)$ とおく。$1/(A+iB)=U-iV$ より

$$
\boxed{\operatorname{Re}f=\sin U\cosh V,\qquad\operatorname{Im}f=-\cos U\sinh V}.
$$

(2) 分母は $(z+i)(z+3-i)$ であり、$-i,-3+i$ は孤立真性特異点である。実数 $a$ を中心とする収束半径は

$$
R(a)=\min\{\sqrt{a^2+1},\sqrt{(a+3)^2+1}\}.
$$

$R(a)=\sqrt2$ を解くと $\boxed{a=-4,-2,-1,1}$。

### 問題2
$F(z)=e^{iz}/\cosh z$ とおく。内部の単純極 $z=i\pi/2$ の留数は $e^{-\pi/2}/i$。両側辺の積分は $|\cosh(R+iy)|\ge\sinh R$ より零に収束する。上辺では $F(x+i\pi)=-e^{-\pi}F(x)$ で向きが逆だから

$$
(1+e^{-\pi})\int_{-\infty}^\infty\frac{e^{ix}}{\cosh x}\,dx=2\pi e^{-\pi/2}.
$$

実部をとって

$$
\boxed{\int_{-\infty}^\infty\frac{\cos x}{\cosh x}\,dx=\frac\pi{\cosh(\pi/2)}}.
$$

### 問題3
(1) $(e^{x+iy})_{xx}=e^{x+iy}$、$(e^{x+iy})_{yy}=-e^{x+iy}$ より和は零。

(2) 正則関数は滑らかであり、$f_x=f'(z),f_y=if'(z)$。従って $f_{xx}+f_{yy}=f''-f''=0$。

(3) 積の微分則と調和性から

$$
0=\Delta(f^2)=2(f_x^2+f_y^2)+2f\Delta f,
\qquad(f_x+if_y)(f_x-if_y)=0.
$$

$f_x\ne0$ なので連続関数 $f_y/f_x$ は $\{i,-i\}$ のみを値に取る。領域 $\Omega$ は連結だから、この比は一定である。$f_y=if_x$ なら $f$ は Cauchy–Riemann 方程式を満たして正則。$f_y=-if_x$ なら $\overline f$ が同方程式を満たして正則である。
