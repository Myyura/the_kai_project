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

> 微分方程式 $\frac{d^2x}{dt^2}+a\frac{dx}{dt}+bx=0$ ($a,b$は実定数)$\cdots$(A)
> の一般解は、2次方程式 $r^2+ar+b=0\cdots$(B)
> の解によって表すことができ、
> 
> 1. 式(B)が異なる二つの実数解$p,q$を持つとき
> 
> $$
>   x=C_1e^{pt}+C_2e^{qt}
> $$
> 
> 3. 式(B)が異なる二つの虚数解$h\pm ki$を持つとき
> 
> $$
>   x=e^{ht}(C_1\cos kt+C_2\sin kt)
> $$
> 
> 5. 式(B)が重解$p$を持つとき
> 
> $$
>   x=e^{pt}(C_1+C_2t)
> $$
> 
> となる。ただし、$C_1,C_2$ は積分定数である。

(7) (6)で求めた条件において、$x(t)$のグラフを表せ。

次に、目標位置との差の積分値に比例する力をさらに加えることを考える。すなわち、
$f(t)=k_1\{L-x(t)\}-k_2v(t)+k_3\int_0^t\{L-x(\tau)\}d\tau$ を与える。なお、$k_1,k_2,k_3$は正の定数とする。

(8) $k_3\int_0^t\{L-x(\tau)\}d\tau$ を加えることによって生じる効果と、その効果が現れる理由を説明せよ。

## **Description (English)**

Let us consider to control the position of a cart with mass $M$ placed on a slope with angle $\theta$ as illustrated in Figure 1. We can move the cart by force $f$ along the $x$-axis parallel to the slope. Assume that $f$ can be sufficiently large to pull up the cart. Friction between the cart and the slope and air resistance are negligible. We let $f(t), x(t),$ and $v(t)$ denote the force $f$, the position, and the velocity of the cart at time $t$, respectively. The magnitude of gravity acceleration is denoted by $g$.

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/ci_201708_2_p1.png" width="350" alt=""/>
</figure>

Suppose that $x(0)=0$ and $v(0)=0$ at time $t=0$. We consider a method to move the cart to the position $x=L$. Answer the following questions.

(1) Find the position and the velocity of the cart when we accelerate it with a constant force $f(t)=F$ ($F>0$) until the time $t_1$.

(2) We want to deaccelerate the cart with a constant force $f(t)=-F$ ($F>0$) from the time $t_1$ in Question (1) until the time $t_2$ ($t_2 \ge t_1$) so that $x(t_2)=L$ and $v(t_2)=0$. Find $t_1$ and $t_2$ which realize this motion.

Next, we consider to give a force proportional to the displacement from the target position $x=L$. Specifically, we give $f(t)=k_1\{L-x(t)\}$. $k_1$ is a positive constant.

(3) Write down the equations of motion for this case.

(4) Draw a graph of $x(t)$.

Next, we consider to further add a force proportional to the velocity of the cart. Specifically, we give $f(t)=k_1\{L-x(t)\}-k_2v(t)$. $k_1$ and $k_2$ are positive constants.

(5) Explain an effect caused by adding $-k_2v(t)$ and the reason why this effect occurs.

(6) Find the condition regarding $k_1$ and $k_2$ so that $x(t)$ does not oscillate. You can use the following facts if necessary.

> The general solution of a differential equation 
> $$\frac{d^2x}{dt^2}+a\frac{dx}{dt}+bx=0 \text{ ($a$ and $b$ are real-valued constants)}\cdots\text{(A)}$$ 
> can be represented by the solution of the quadratic equation
> 
> $$
> r^2+ar+b=0\cdots\text{(B)}
> $$
> 
> as follows:
> 1. When Eq.(B) has two different real roots $p$ and $q$,
> 
>   $$
>   x=C_1e^{pt}+C_2e^{qt}
>   $$
> 
> 3. When Eq.(B) has two different imaginary roots $h\pm ki$,
> 
>   $$
>   x=e^{ht}(C_1\cos kt+C_2\sin kt)
>   $$
> 
> 5. When Eq.(B) has a double root $p$,
> 
>   $$
>   x=e^{pt}(C_1+C_2t)
>   $$
>
> Here, $C_1$ and $C_2$ are constants of integration.

(7) Draw a graph of $x(t)$ under the condition obtained in Question (6).

Next, we consider to further add a force proportional to the integral of the displacement from the target position. Specifically, we give $f(t)=k_1\{L-x(t)\}-k_2v(t)+k_3\int_0^t\{L-x(\tau)\}d\tau$. $k_1, k_2,$ and $k_3$ are positive constants.

(8) Explain an effect caused by adding $k_3\int_0^t\{L-x(\tau)\}d\tau$ and the reason why this effect occurs.

## **Kai**
