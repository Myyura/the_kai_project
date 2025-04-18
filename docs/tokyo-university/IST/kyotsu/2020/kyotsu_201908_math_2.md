---
sidebar_label: "2019年8月実施 数学 第2問"
tags:
  - Tokyo-University
---
# 東京大学 情報理工学研究科 2019年8月実施 数学 第2問

## **Author**
[etsurin](https://zhuanlan.zhihu.com/p/561992447)

## **Description**
$xy$ 平面内の滑らかな曲線 $\boldsymbol{p} = (p(t), q(t))$ ($t \in [a, b]$) を考える。
時刻 $t = a'$ から $b'$ までの $\boldsymbol{p}$ の長さ $l_{a', b'}$ は

$$
l_{a', b'} = \int_{a'}^{b'} \sqrt{ \left( \frac{dp}{dt} \right)^2 + \left( \frac{dq}{dt} \right)^2 } dt
$$

と定義され、$\boldsymbol{p}$ の全長 $l_{a, b}$ を $L$ とする。
曲線 $\boldsymbol{p}$ は、 $\frac{d\boldsymbol{p}}{dt} = (0, 0)$ とはならないものとする。
時刻 $a$ から $t$ までの $\boldsymbol{p}$ の長さを $l_{a, t}$ を変数 $s = s(t)$ で表すと、$\boldsymbol{p}$ を媒介変数 $s \in [0, L]$ の曲線とみることができる。
そして、$s$ も時刻と呼ぶ。以下の問いに答えよ。

(1) 以下の等式を示せ。

$$
\sqrt{ \left( \frac{dp}{ds} \right)^2 + \left( \frac{dq}{ds} \right)^2 } = 1
$$

(2) $\theta = \theta(s)$ を時刻 $s$ における $\boldsymbol{p}$ の接線ベクトル $\frac{d\boldsymbol{p}}{ds} = \left( \frac{dp}{ds}, \frac{dq}{ds} \right)$ と $x$ 軸とのなす角とする。
このとき、以下の等式を示せ。

$$
\frac{dp}{ds} \frac{d^2q}{ds^2} - \frac{dq}{ds} \frac{d^2p}{ds^2} = \frac{d\theta}{ds}
$$

以下では、曲線 $\boldsymbol{p}$ は、滑らかな閉曲線で、凸集合 $K$ の境界となっているものとする。
また、$\boldsymbol{p}$ は、反時計方向に $K$ をまわるものとする。

(3) 任意の時刻 $s$ で $\frac{d\theta}{ds} \geq 0$ となることを説明せよ。

(4) $K$ に含まれない点 $\boldsymbol{x} = (x, y)$ は、時刻 $s \in [0, L]$ および $\boldsymbol{x}$ と $K$ の距離 $r$ によって、

$$
\boldsymbol{x} = \boldsymbol{p}(s) + r\boldsymbol{u}(s)
$$

と一意に表すことができる。
ここで、$\boldsymbol{u}(s)$ は、時刻 $s$ における $\boldsymbol{p}$ の単位法線ベクトルで、$K$ の外を向いているものとする。
そのような $\boldsymbol{x} = (x, y)$ に対して、以下の等式を示せ。

$$
\left \lvert \text{det} \begin{pmatrix} \frac{\partial x}{\partial s} & \frac{\partial x}{\partial r} \\ \frac{\partial y}{\partial s} & \frac{\partial y}{\partial r} \end{pmatrix} \right \rvert = 1 + r \frac{d\theta}{ds}
$$

(5) 非負実数 $D$ に対し、$K_D$ を $K$ から距離 $D$ 以内にある点の集合とする。
このとき、$K_D$ の面積 $A_D = \iint_{K_D} dxdy$ は、$K$ の面積 $A$ と $\boldsymbol{p}$ の全長 $L$ を用いて

$$
A_D = A + LD + \pi D^2
$$

と表せることを示せ。


## **Kai**
### (1)

$$
s(t) = \int_a^t \sqrt{\left( \frac{dp}{d\xi} \right)^2 + \left( \frac{dq}{d\xi} \right)^2} d\xi
$$

$$
\frac{ds}{dt} = \sqrt{ \left( \frac{dp}{dt} \right)^2 + \left( \frac{dq}{dt} \right)^2 }
$$

$$
\sqrt{ \left( \frac{dp}{ds} \right)^2 + \left( \frac{dq}{ds} \right)^2 } = 1
$$

### (2)

$$
\tan \theta = \frac{\frac{dq}{ds}}{\frac{dp}{ds}} \qquad \theta = \arctan \left( \frac{\frac{dq}{ds}}{\frac{dp}{ds}} \right)
$$

$$
\begin{aligned}
\frac{d\theta}{ds} &= \frac{\frac{d^2q}{ds^2} \frac{dp}{ds} - \frac{d^2p}{ds^2} \frac{dq}{ds}}{\left( \frac{dp}{ds} \right)^2} \frac{1}{1 + \frac{\left( \frac{dq}{ds} \right )^2}{ \left( \frac{dp}{ds} \right)^2}} \\
&=\frac{\frac{d^2q}{ds^2} \frac{dp}{ds} - \frac{d^2p}{ds^2} \frac{dq}{ds}}{\left( \frac{dp}{ds} \right)^2} \frac{\left( \frac{dp}{ds} \right)^2}{\left( \frac{dp}{ds} \right)^2 + \left( \frac{dq}{ds} \right)^2} \\
&= \frac{d^2q}{ds^2} \frac{dp}{ds} - \frac{d^2p}{ds^2} \frac{dq}{ds}
\end{aligned}
$$

### (3)
There are following 4 possibilities:

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/IST/kyotsu_2020_math_2_p1.png" width="600" height="140" alt=""/>
</figure>

Case 1:

$$
\frac{d^2q}{ds^2} \geq 0,\ \frac{dp}{ds} \geq 0,\ \frac{d^2p}{ds^2} \leq 0, \ \frac{dq}{ds} \geq 0
$$

$$
\frac{d^2q}{ds^2} \frac{dp}{ds} \geq 0, \quad \frac{d^2p}{ds^2}\frac{dq}{ds} \leq 0, \quad \frac{d\theta}{ds} \geq 0
$$

Case 2:

$$
\frac{d^2q}{ds^2} \leq 0,\ \frac{dp}{ds} \leq 0,\ \frac{d^2p}{ds^2} \leq 0, \ \frac{dq}{ds} \geq 0
$$

$$
\frac{d^2q}{ds^2} \frac{dp}{ds} \geq 0, \quad \frac{d^2p}{ds^2}\frac{dq}{ds} \leq 0, \quad \frac{d\theta}{ds} \geq 0
$$

Case 3:

$$
\frac{d^2q}{ds^2} \leq 0,\ \frac{dp}{ds} \leq 0,\ \frac{d^2p}{ds^2} \geq 0, \ \frac{dq}{ds} \leq 0
$$

$$
\frac{d^2q}{ds^2} \frac{dp}{ds} \geq 0, \quad \frac{d^2p}{ds^2}\frac{dq}{ds} \leq 0, \quad \frac{d\theta}{ds} \geq 0
$$

Case 4:

$$
\frac{d^2q}{ds^2} \geq 0,\ \frac{dp}{ds} \geq 0,\ \frac{d^2p}{ds^2} \geq 0, \ \frac{dq}{ds} \leq 0
$$

$$
\frac{d^2q}{ds^2} \frac{dp}{ds} \geq 0, \quad \frac{d^2p}{ds^2}\frac{dq}{ds} \leq 0, \quad \frac{d\theta}{ds} \geq 0
$$

Therefore, for arbitrary $s$ we have $\frac{d\theta}{ds} \geq 0$.

### (4)
Let $\boldsymbol{p}(s) = (p(s), q(s)),\ \boldsymbol{u}(s) = (u(s), v(s))$.
Then we have

$$
\begin{aligned}
\frac{\partial x}{\partial s} = p'(s) + ru'(s)& &\frac{\partial y}{\partial s} = q'(s) + rv'(s) \\
\frac{\partial x}{\partial r} = u(s)&  &\frac{\partial y}{\partial r} = v(s)
\end{aligned}
$$

Note that for time $s$, tangent vector of $\boldsymbol{p}$ is $\left(\frac{dp}{ds}, \frac{dq}{ds} \right)$ and unit normal vector $\boldsymbol{u}(s)$ is $\left( \frac{dq}{ds}, -\frac{dp}{ds} \right)$, hence

$$
\begin{aligned}
\left \lvert \text{det} \begin{pmatrix} \frac{\partial x}{\partial s} & \frac{\partial x}{\partial r} \\ \frac{\partial y}{\partial s} & \frac{\partial y}{\partial r} \end{pmatrix} \right \rvert &=
\left \lvert -\frac{dp}{ds} \left ( \frac{dp}{ds} + r \frac{d^2q}{ds^2} \right ) - \frac{dq}{ds} \left ( \frac{dq}{ds} - r \frac{d^2p}{ds^2} \right)  \right \rvert \\
&= \left( \left( \frac{dp}{ds} \right)^2 + \left( \frac{dq}{ds} \right)^2 \right) + r \left( \frac{d^2q}{ds^2} \frac{dp}{ds} - \frac{d^2p}{ds^2} \frac{dq}{ds} \right) \\
&= 1 + r\frac{d\theta}{ds}
\end{aligned}
$$

### (5)
Note that the matrix in (4) is a Jacobian matrix.
Consider the area $S$ ($r \in [0,D], \ s \in [0, L]$) between $K$ and $K_D$, we have

$$
\begin{aligned}
S &= \iint_{K, K_D} dxdy \\
&= \int_0^L \int_0^D \left( 1 + r\frac{d\theta}{ds} \right) drds \\
&= \int_0^L \left(D + \frac{D^2}{2} \frac{d\theta}{ds} \right) ds \\
&= \int_0^L D\ ds + \int_0^{2\pi} \frac{D^2}{2} d\theta \\
&=DL + D^2 \pi
\end{aligned}
$$

Since the area inside $K$ is $A$, we have

$$
A_D = A + S = A + DL + D^2 \pi
$$
