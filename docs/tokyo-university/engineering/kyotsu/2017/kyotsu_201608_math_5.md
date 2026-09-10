---
sidebar_label: '2016年8月実施 数学 第5問'
tags:
  - Tokyo-University
  - Mathematics.Differential-Equations.Laplace-Transform
  - Mathematics.Differential-Equations.Systems-of-ODEs
  - Mathematics.Differential-Equations.Initial-Value-Problem
---

# 東京大学 工学系研究科 2016年8月実施 数学 第5問

## **Author**
祭音Myyura

## **Description**

出典：[公式2017年度数学試験](https://www.t.u-tokyo.ac.jp/hubfs/pdf/H29_suugaku_J.pdf)、第5問。

$t \ge 0$ で定義される関数 $f(t)$ のラプラス変換 $F(s) = L[f(t)]$ は

$$
\begin{align}
F(s) = \int_0^{\infty}f(t)e^{-st}\text{d}t
\end{align}
$$

で定義される。ただし, $s$ は複素数, $e$ は自然対数の底とする。以下の問いに答えよ。導出過程を示すこと。

### I.
以下の関係式が成り立つことを示せ。

#### 1.
$n$ が自然数のとき, $L[t^{n}] = \frac{n!}{s^{n+1}}$

#### 2.
$f(t)$ が微分可能であるとき,　$L[\frac{\text{d}f(t)}{\text{d}t}] = sF(s) - f(0)$

#### 3.
$a$ が実数のとき, $L[e^{at}f(t)] = F(s-a)$

### II.
ラプラス変換を用いて, $t \ge 0$ における以下の微分方程式の解を求めよ。

$$
\begin{align}
t\frac{\text{d}^2f(t)}{\text{d}t^2} + (1 + 3t)\frac{\text{d}f(t)}{\text{d}t} + 3f(t) = 0,\quad f(0) = 1,\quad \frac{\text{d}f}{\text{d}t}\bigg|_{t = 0} = -3
\end{align}
$$

ただし, $L[tf(t)] = -\frac{\text{d}}{\text{d}s}F(s)$ の関係式を用いてよい。

### III.
次の連立微分方程式を満足する点 $P(x(t),y(t))$ が, $t = 0$ のとき点 $(a,b)$ を通るとする。ただし,　$a ,b$ は実数とする。

$$
\left\{
\begin{align}
\frac{\text{d}x(t)}{\text{d}t} &= -x(t) \\
\frac{\text{d}y(t)}{\text{d}t} &= x(t) - 2y(t) \nonumber \\
\end{align}
\right.
$$

#### 1.
ラプラス変換を用いて,　$t \ge 0$ における式(3)の解を求めよ。

#### 2.
問 III.1 の解から $t$ を消去し, $x$ と $y$ の関係式を示せ。

#### 3.
$(a,b) = (1,1)$ および $(-1,1)$ のとき, $t$ を $0$ から無限大まで連続的に変化させた場合の点 $P$ の軌跡をそれぞれ図示せよ。

#### 题目描述

对定义在 $t\ge0$ 上的函数 $f(t)$，拉普拉斯变换定义为

$$
F(s)=\mathcal L[f(t)]=\int_0^\infty f(t)e^{-st}\,\mathrm dt,
$$

其中 $s$ 为复数。各问均须写出推导。

1. 证明三条基本性质：对自然数 $n$，
   $\mathcal L[t^n]=n!/s^{n+1}$；对可微 $f$，
   $\mathcal L[f'(t)]=sF(s)-f(0)$；对实数 $a$，
   $\mathcal L[e^{at}f(t)]=F(s-a)$。
2. 利用拉普拉斯变换求初值问题

   $$
   tf''(t)+(1+3t)f'(t)+3f(t)=0,\qquad
   f(0)=1,\quad f'(0)=-3
   $$

   在 $t\ge0$ 上的解；可使用
   $\mathcal L[tf(t)]=-\mathrm dF/\mathrm ds$。
3. 点 $P(x(t),y(t))$ 满足

   $$
   x'=-x,\qquad y'=x-2y,\qquad (x(0),y(0))=(a,b).
   $$

   用拉普拉斯变换求 $t\ge0$ 的解；消去 $t$ 得到 $x,y$ 的关系；最后分别对 $(a,b)=(1,1)$ 与 $(-1,1)$，画出 $t$ 从 $0$ 连续增至无穷时 $P$ 的轨迹并标明运动方向。

## **Kai**

### I

以下では変換が収束し、部分積分の無限遠境界項が消える半平面を考える。

1. $\operatorname{Re}s>0$ において部分積分すると

   $$
   L[t^n]=\frac nsL[t^{n-1}],\qquad L[1]=\frac1s,
   $$

   よって $\boxed{L[t^n]=n!/s^{n+1}}$。
2. 部分積分より

   $$
   L[f']=[f(t)e^{-st}]_0^\infty+s\int_0^\infty f(t)e^{-st}\,\mathrm dt
   =\boxed{sF(s)-f(0)}.
   $$

3. 定義から

   $$
   L[e^{at}f(t)]=\int_0^\infty f(t)e^{-(s-a)t}\,\mathrm dt
   =\boxed{F(s-a)}.
   $$

### II

初期条件と $L[tf]=-F'$ を用いて変換すると、

$$
-\frac{\mathrm d}{\mathrm ds}(s^2F-s+3)+(sF-1)
-3\frac{\mathrm d}{\mathrm ds}(sF-1)+3F=0.
$$

整理して $(s+3)F'+F=0$、したがって $F=C/(s+3)$。逆変換し、$f(0)=1$ を使えば

$$
\boxed{f(t)=e^{-3t}\qquad(t\ge0).}
$$

### III.1

$x,y$ の変換を $X,Y$ とすると、

$$
(s+1)X=a,\qquad(s+2)Y=X+b.
$$

よって

$$
X=\frac a{s+1},\qquad
Y=\frac a{s+1}+\frac{b-a}{s+2}.
$$

逆変換により

$$
\boxed{x=ae^{-t},\qquad y=ae^{-t}+(b-a)e^{-2t}.}
$$

### III.2

$a\ne0$ のとき、$e^{-t}=x/a$ より

$$
\boxed{y=x+\frac{b-a}{a^2}x^2,\qquad0<x/a\le1.}
$$

$a=0$ のときは $x=0,y=be^{-2t}$。したがって $b>0$ なら $0<y\le b$、$b<0$ なら $b\le y<0$、$b=0$ なら原点のみである。

### III.3

$(a,b)=(1,1)$ なら $y=x,\ 0<x\le1$ であり、$(1,1)$ から原点へ向かう。

$(a,b)=(-1,1)$ なら $y=x+2x^2,\ -1\le x<0$。$(-1,1)$ から $(-1/2,0)$、頂点 $(-1/4,-1/8)$ を通って原点へ向かう。いずれも原点は $t\to\infty$ の極限点である。

![軌跡と時刻の増加方向](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2017/tokyo-kyotsu-201608-trajectories-audited.svg)
