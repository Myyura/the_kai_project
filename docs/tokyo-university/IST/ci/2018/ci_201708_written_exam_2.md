---
sidebar_label: '2017年8月実施 筆記試験 第2問'
tags:
  - Tokyo-University
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2017年8月実施 筆記試験 第2問

## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description**

図1のような角度$\theta$の斜面に置かれた質量$M$の台車の位置制御を考える。台車には、斜面に沿った$x$軸方向へ力$f$を加え、移動させることができる。力$f$は台車を引き上げるために十分な大きさを与えることができ、台車と床の摩擦および空気抵抗は無視できるものとする。時刻$t$における力$f$および台車の位置と速度をそれぞれ$f(t)$、$x(t)$、$v(t)$と表記する。また、重力加速度の大きさを$g$とする。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201708_2_p1.png" width="350" alt=""/>
</figure>

時刻$t=0$において$x(0)=0$、$v(0)=0$とする。この台車を$x=L$の位置へ移動させる方法を考える。
以下の問いに答えよ。

(1) 台車を一定の力$f(t)=F (F>0)$で時刻$t_1$まで加速した時の台車の位置と速度を求めよ。

(2) (1)における時刻$t_1$から時刻$t_2$ ($t_2 \ge t_1$)まで台車を一定の力$f(t)=-F (F>0)$で減速し、$x(t_2)=L$、$v(t_2)=0$としたい。この動作を実現する$t_1$と$t_2$を求めよ。

次に、目標位置である$x=L$との差に比例する力を台車に加えることを考える。すなわち、$f(t)=k_1\{L-x(t)\}$を与える。なお、$k_1$は正の定数とする。

(3) この場合の台車の運動方程式を表せ。

(4) $x(t)$をグラフに表せ。

次に、台車の速度に比例した力を更に加えることを考える。すなわち、$f(t)=k_1\{L-x(t)\}-k_2v(t)$を与える。なお、$k_1, k_2$は正の定数とする。

(5) $-k_2v(t)$を加えることによって生じる効果と、その効果が現れる理由を説明せよ。

(6) $x(t)$が振動しないための$k_1, k_2$に関する条件を求めよ。必要であれば以下の事実を用いてよい。

微分方程式 $\frac{d^2x}{dt^2}+a\frac{dx}{dt}+bx=0$ ($a,b$は実定数)$\cdots$(A)
の一般解は、2次方程式 $r^2+ar+b=0\cdots$(B)
の解によって表すことができ、
1. 式(B)が異なる二つの実数解$p,q$を持つとき
  $$
  x=C_1e^{pt}+C_2e^{qt}
  $$
2. 式(B)が異なる二つの虚数解$h\pm ki$を持つとき
  $$
  x=e^{ht}(C_1\cos kt+C_2\sin kt)
  $$
3. 式(B)が重解$p$を持つとき
  $$
  x=e^{pt}(C_1+C_2t)
  $$
となる。ただし、$C_1,C_2$ は積分定数である。

(7) (6)で求めた条件において、$x(t)$のグラフを表せ。

次に、目標位置との差の積分値に比例する力をさらに加えることを考える。すなわち、
$f(t)=k_1\{L-x(t)\}-k_2v(t)+k_3\int_0^t\{L-x(\tau)\}d\tau$ を与える。なお、$k_1,k_2,k_3$は正の定数とする。

(8) $k_3\int_0^t\{L-x(\tau)\}d\tau$ を加えることによって生じる効果と、その効果が現れる理由を説明せよ。



## **Description (English)**


Consider the position control of a cart of mass $M$ placed on an inclined plane with an angle $\theta$ as shown in Figure 1. A force $f$ can be applied to the cart in the direction of the $x$-axis along the slope to move it. The force $f$ can be sufficient to pull the cart up, and friction between the cart and the floor as well as air resistance are assumed to be negligible. The force $f$, the position of the cart, and the velocity at time $t$ are denoted as $f(t)$, $x(t)$, and $v(t)$, respectively. In addition, let the magnitude of gravitational acceleration be $g$.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201708_2_p1.png" width="350" alt=""/>
</figure>


Assume that at time $t=0$, $x(0)=0$ and $v(0)=0$. Consider a method to move this cart to the position $x=L$.
Answer the following questions.

(1) Find the position and velocity of the cart when it is accelerated with a constant force $f(t)=F (F>0)$ until time $t_1$.

(2) Decelerate the cart with a constant force $f(t)=-F (F>0)$ from time $t_1$ in (1) to time $t_2$ ($t_2 \ge t_1$), and we want to achieve $x(t_2)=L$ and $v(t_2)=0$. Find $t_1$ and $t_2$ that achieve this motion.

Next, consider applying a force to the cart that is proportional to the difference from the target position $x=L$. That is, give $f(t)=k_1\{L-x(t)\}$. Note that $k_1$ is a positive constant.

(3) Express the equation of motion for the cart in this case.

(4) Represent $x(t)$ on a graph.

Next, consider further adding a force proportional to the velocity of the cart. That is, give $f(t)=k_1\{L-x(t)\}-k_2v(t)$. Note that $k_1, k_2$ are positive constants.

(5) Explain the effect produced by adding $-k_2v(t)$ and the reason why that effect appears.

(6) Find the condition regarding $k_1, k_2$ for $x(t)$ not to oscillate. You may use the following facts if necessary.


The general solution to the differential equation $\frac{d^2x}{dt^2}+a\frac{dx}{dt}+bx=0$ ($a,b$ are real constants)$\cdots$(A)
can be expressed by the solutions to the quadratic equation $r^2+ar+b=0\cdots$(B),
1. When equation (B) has two distinct real roots $p, q$
  $$
  x=C_1e^{pt}+C_2e^{qt}
  $$
2. When equation (B) has two distinct imaginary roots $h\pm ki$
  $$
  x=e^{ht}(C_1\cos kt+C_2\sin kt)
  $$
3. When equation (B) has a repeated root $p$
  $$
  x=e^{pt}(C_1+C_2t)
  $$
Here, $C_1, C_2$ are integration constants.

(7) Represent the graph of $x(t)$ under the condition found in (6).

Next, consider further adding a force proportional to the integral value of the difference from the target position. That is,
give $f(t)=k_1\{L-x(t)\}-k_2v(t)+k_3\int_0^t\{L-x(\tau)\}d\tau$. Note that $k_1, k_2, k_3$ are positive constants.

(8) Explain the effect produced by adding $k_3\int_0^t\{L-x(\tau)\}d\tau$ and the reason why that effect appears.

## **Kai**