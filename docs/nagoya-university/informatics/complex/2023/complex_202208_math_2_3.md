---
sidebar_label: "2022年8月実施 数2 [3]"
tags:
  - Nagoya-University
  - Mathematics.Differential-Equations.Initial-Value-Problem
  - Mathematics.Differential-Equations.Systems-of-ODEs
---
# 名古屋大学 情報学研究科 複雑系科学専攻 2022年8月実施 数2 [3]

## **Author**
[思齐塾](https://www.siqishu.com/), 祭音Myyura

## **Description**

[出典：名古屋大学公式問題](https://www.i.nagoya-u.ac.jp/wp-content/uploads/2022/09/153686fd38b76aec8fe63b4c47663818.pdf)


以下の2次元非線形力学系について考える。

(a) $\frac{dx}{dt} = x - y - x(x^2 + y^2)$

(b) $\frac{dy}{dt} = y + x - y(x^2 + y^2)$

1) 連立微分方程式 (a) (b) の不動点を求めよ。さらにその不動点におけるヤコビ行列の固有値を求め、不動点の安定性を調べ、不動点近傍での軌道の概略を図示せよ。

2) 極座標 $x(t) = r(t)\cos\theta(t)$ , $y(t) = r(t)\sin\theta(t)$ に変換して、 $r(t)$ と $\theta(t)$ の微分方程式を導け。

3) $r(t)$ および $\theta(t)$ の初期値をそれぞれ $r(0) = r_0$ , $\theta(0) = \theta_0$ として、2)で導いた $r(t)$ と $\theta(t)$ の微分方程式の解を求めよ。

4) $t \to \infty$ での $r(t)$ の極限値を求め, 8個の初期値 $(r_0, \theta_0) = (2^i, n\pi/2) (i = \pm 1, n = 0,1,2,3)$ からの $t \geq 0$ における軌道の概略を図示せよ。

5) 不動点を除く任意の初期値からの解が $t \to \infty$ で漸近する軌道の式を求めよ。このような軌道は一般に何と呼ばれているか、その名称を答えよ。

### 题目描述

考察二维非线性动力系统

$$
\text{(a)}\quad
\frac{dx}{dt}=x-y-x(x^2+y^2),
$$

$$
\text{(b)}\quad
\frac{dy}{dt}=y+x-y(x^2+y^2).
$$

1. 求联立方程 (a)、(b) 的全部不动点；进一步求各不动点处 Jacobian 矩阵的特征值，判断稳定性，并画出不动点附近轨道的大致形状；
2. 作极坐标变换

   $$
   x(t)=r(t)\cos\theta(t),\qquad
   y(t)=r(t)\sin\theta(t),
   $$

   导出 $r(t),\theta(t)$ 所满足的微分方程；
3. 给定初始值

   $$
   r(0)=r_0,\qquad\theta(0)=\theta_0,
   $$

   求第 2 问所得两个微分方程的解；
4. 求 $t\to\infty$ 时 $r(t)$ 的极限，并对八组初始值

   $$
   (r_0,\theta_0)=\left(2^i,\frac{n\pi}{2}\right),
   \qquad i=\pm1,\quad n=0,1,2,3,
   $$

   画出 $t\ge0$ 时轨道的大致形状；
5. 求除不动点外任意初值的解在 $t\to\infty$ 时所趋近的轨道方程，并写出这类轨道的通用名称。

## **Kai**

1) $r^2=x^2+y^2$ と書くと、平衡点では

$$
\begin{pmatrix}1-r^2&-1\\1&1-r^2\end{pmatrix}
\begin{pmatrix}x\\y\end{pmatrix}=0.
$$

この行列式は $(1-r^2)^2+1>0$ なので、平衡点は

$$
\boxed{(x,y)=(0,0)}
$$

だけである。原点での Jacobian は

$$
J(0,0)=\begin{pmatrix}1&-1\\1&1\end{pmatrix},
$$

固有値は $1\pm i$ である。したがって原点は不安定焦点であり、近傍の軌道は反時計回りに外向きへ螺旋を描く。

2)  $x = r\cos\theta$ and $y = r\sin\theta$ .  So $x^2 + y^2 = r^2$ .
$\frac{dx}{dt} = \frac{dr}{dt}\cos\theta - r\sin\theta\frac{d\theta}{dt}$ .  Substituting $x = r\cos\theta$ and $y = r\sin\theta$ into $\frac{dx}{dt} = x - y - x(x^2 + y^2)$ , we get $\frac{dr}{dt}\cos\theta - r\sin\theta\frac{d\theta}{dt} = r\cos\theta - r\sin\theta - r^3\cos\theta$ .  So
$\frac{dr}{dt}\cos\theta - r\sin\theta\frac{d\theta}{dt} = r\cos\theta - r\sin\theta - r^3\cos\theta \hspace{1cm} (1)$ .  Also $\frac{dy}{dt} = \frac{dr}{dt}\sin\theta + r\cos\theta\frac{d\theta}{dt}$ .  Since $\frac{dy}{dt} = y + x - y(x^2 + y^2)$ , we have $\frac{dr}{dt}\sin\theta + r\cos\theta\frac{d\theta}{dt} = r\sin\theta + r\cos\theta - r^3\sin\theta \hspace{1cm} (2)$ .
Multiplying (1) by $\cos\theta$ and (2) by $\sin\theta$ and adding, we get $\frac{dr}{dt} = r - r^3$ .
Multiplying (1) by $\sin\theta$ and (2) by $\cos\theta$ and subtracting, we get $\frac{d\theta}{dt} = 1$ .
So $\frac{dr}{dt} = r - r^3$ and $\frac{d\theta}{dt} = 1$ .

3) $\rho=r^2$ とおくと

$$
\rho'=2\rho(1-\rho).
$$

$r_0>0$ のとき、その解は

$$
\rho(t)=\frac{1}{1+(r_0^{-2}-1)e^{-2t}},
$$

したがって

$$
\boxed{r(t)=\frac{1}{\sqrt{1+(r_0^{-2}-1)e^{-2t}}}},
\qquad
\boxed{\theta(t)=t+\theta_0}.
$$

$r_0=0$ の場合は $r(t)\equiv0$ である。

4) $r_0>0$ なら $\lim_{t\to\infty}r(t)=1$ であり、 $r_0=0$ なら極限は $0$ である。指定された8軌道では、 $r_0=2$ の4本は半径を減らしながら、 $r_0=1/2$ の4本は半径を増やしながら、いずれも反時計回りに単位円へ螺旋状に近づく。各4本は初期角が $\pi/2$ ずつ異なる回転対称な軌道である。

5) 不動点以外の全軌道が漸近する軌道は

$$
\boxed{x^2+y^2=1}
$$

であり、これは安定な極限周期軌道（リミットサイクル）と呼ばれる。周期は $2\pi$ である。


![原点近傍の外向き螺旋と指定された八つの軌道](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya_university/informatics/complex/2023/nagoya-complex2023-limit-cycle.svg)

左図は原点近傍の拡大図，右図の青線は $r_0=1/2$，橙線は $r_0=2$ の軌道である。
点は初期位置，矢印は時間が増える方向を表す。$r_0=0$ では偏角は定義されず，
直交座標での解は $(x,y)=(0,0)$ である。
