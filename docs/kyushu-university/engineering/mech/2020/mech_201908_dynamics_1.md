---
sidebar_label: "2019年8月実施 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Connected-Particles-and-Tension
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
---

# 九州大学 工学府 機械系専攻 2019年8月実施 機械力学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

以下の問いに答えよ。滑車の回転に関する摩擦は無視できるものとし、重力加速度を $g$ とする。（50点）

**(1)** 図 (a) に示すように、質量 $2m,3m$ の物体が質量の無視できる滑車にかけられている。物体をつなぐロープには張力のみが作用し、その質量と伸縮は無視できる。質量 $2m$ の物体の上向き変位を $x$ とする。加速度 $\ddot x$ とロープに作用する A 側、B 側の張力 $F_A,F_B$ を求めよ。

**(2)** 図 (a) において質量 $3m$ の物体の質量を $\alpha m$ と置き換えて $\alpha$ を増加させていくと $\ddot x$ はどのようになるか。

![原図 (a)：定滑車にかけた二物体](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/mech_201908_dynamics_1_figure_1.png)

**(3)** 図 (b) のように、質量 $2m$ の物体が質量の無視できる動滑車に吊るされる。動滑車にかかるロープの一端は天井に固定され、他端は質量 $9m$、半径 $r$、回転中心まわりの慣性モーメント $I=9mr^2/2$ の定滑車を介して質量 $3m$ のおもりにつながれている。ロープには張力のみが作用し質量と伸縮は無視できる。定滑車とロープの間にすべりはないとする。質量 $2m$ の物体の上向き変位を $y$ とし、加速度 $\ddot y$ と区間 A、B、C のロープに作用する張力 $F_A,F_B,F_C$ を求めよ。

**(4)** 図 (b) の定滑車に時計まわりにトルク $T$ を与え質量 $2m$ の物体を加速度 $g$ で上昇させる。$T$ の大きさを求めよ。また、このときのロープの張力 $F_A,F_B,F_C$ を求めよ。

![原図 (b)：動滑車と慣性をもつ定滑車](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2020/mech_201908_dynamics_1_figure_2.png)

### 题目描述

回答下列问题。忽略滑轮转动摩擦，重力加速度为 $g$。（50分）

**(1)** 如图 (a)，质量为 $2m,3m$ 的物体悬挂于质量可忽略的滑轮两侧。连接物体的绳只能承受张力，质量和伸缩可忽略。以 $x$ 表示 $2m$ 物体向上的位移，求加速度 $\ddot x$ 以及绳 A、B 两侧的张力 $F_A,F_B$。

**(2)** 将图 (a) 中质量为 $3m$ 的物体改为 $\alpha m$，逐渐增大 $\alpha$ 时，$\ddot x$ 如何变化？

**(3)** 如图 (b)，质量为 $2m$ 的物体悬挂在质量可忽略的动滑轮上。绕过动滑轮的绳一端固定于天花板，另一端经过质量为 $9m$、半径为 $r$、绕转动中心的转动惯量为 $I=9mr^2/2$ 的定滑轮，与质量为 $3m$ 的重物相连。绳只能承受张力，质量和伸缩可忽略；定滑轮与绳之间不滑动。以 $y$ 表示 $2m$ 物体向上的位移，求加速度 $\ddot y$ 和绳 A、B、C 各段的张力 $F_A,F_B,F_C$。

**(4)** 对图 (b) 的定滑轮施加顺时针转矩 $T$，使 $2m$ 物体以加速度 $g$ 上升。求 $T$ 的大小及此时绳张力 $F_A,F_B,F_C$。

## **Kai**

### (1)

張力を $F$ とすると

$$
2m\ddot x=F-2mg,\qquad3m\ddot x=3mg-F.
$$

したがって $\boxed{\ddot x=g/5}$、$F=12mg/5$。

### (2)

$$
\boxed{\ddot x=\frac{\alpha-2}{\alpha+2}g},\qquad
\frac{d\ddot x}{d\alpha}=\frac{4g}{(\alpha+2)^2}>0.
$$

$\alpha<2$ では下向き、$\alpha=2$ では $0$、$\alpha>2$ では上向きとなり、$\alpha\to\infty$ で $g$ に下から近づく。

### (3)

動滑車の両側の張力を $F_A=F_B=F$、右端の張力を $F_C$ とする。動滑車が $y$ 上昇すると $3m$ は $2y$ 下降する。定滑車の慣性モーメントは $I=9mr^2/2$、時計回り角加速度は $2\ddot y/r$ である。

$$
\begin{gathered}
2m\ddot y=2F-2mg,\\
6m\ddot y=3mg-F_C,\\
\frac{9mr^2}{2}\frac{2\ddot y}{r}=(F_C-F)r.
\end{gathered}
$$

消去して

$$
\begin{gathered}
\boxed{\ddot y=\frac g8},\\
F_A=F_B=\frac98mg,\\
F_C=\frac94mg.
\end{gathered}
$$

### (4)

最後の回転方程式を $9mr\ddot y=(F_C-F)r+T$ に替えると

$$
\begin{gathered}
\ddot y=\frac{2mg+T/r}{16m},\\
F=m(\ddot y+g),\\
F_C=3mg-6m\ddot y.
\end{gathered}
$$

$\ddot y=g$ を形式的に代入すれば

$$
\begin{gathered}
\boxed{T=14mgr},\\
F_A=F_B=2mg,\\
F_C=-3mg.
\end{gathered}
$$

ただし、ロープは圧縮力を伝えないため、負の $F_C$ は実現できない。$F_C\ge0$ の範囲は $\ddot y\le g/2$、すなわち $T\le6mgr$ である。したがって、全ロープが張った原題の拘束条件を保ちながら $\ddot y=g$ とする物理的な解は存在しない。

## **Reference**

- [九州大学 2020年度 機械力学 公式問題（PDF 1ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-dynamics.pdf)
