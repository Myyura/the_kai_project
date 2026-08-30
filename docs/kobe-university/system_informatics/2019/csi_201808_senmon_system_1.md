---
sidebar_label: "2018年8月実施 専門科目 システム理論 [1]"
tags:
  - Kobe-University
  - Operations-Research.Game-Theory.Best-Response-in-One-Shot-Game
  - Operations-Research.Game-Theory.Nash-Equilibrium
  - Operations-Research.Game-Theory.Saddle-Point
---
# 神戸大学 システム情報学研究科 2018年8月実施 専門科目 システム理論 \[1\]

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**
プレイヤー A, B からなる二人定和ゲームを考える。両者には戦略 1, 2 があり，A, B が戦略 1 を選ぶ確率をそれぞれ $p,q$ とする。利得行列（A の利得，B の利得）は

| A \ B | 戦略 1 | 戦略 2 |
|:---:|:---:|:---:|
| 戦略 1 | $(a_1,b_1)$ | $(a_2,b_2)$ |
| 戦略 2 | $(a_3,b_3)$ | $(a_4,b_4)$ |

である。

1. A, B それぞれの期待利得および最適反応戦略を求めよ。
2. A, B それぞれのマックスミニ戦略を求めよ。
3. 最適反応戦略とマックスミニ戦略が一致することを定式化により示せ。

### 题目描述

考虑由玩家 A、B 构成的二人常和博弈。双方均有策略 1、2，A、B 以概率 $p,q$ 选择策略 1。收益矩阵（A 的收益，B 的收益）为

| A \ B | 策略 1 | 策略 2 |
|:---:|:---:|:---:|
| 策略 1 | $(a_1,b_1)$ | $(a_2,b_2)$ |
| 策略 2 | $(a_3,b_3)$ | $(a_4,b_4)$ |

1. 求双方的期望收益及最优反应策略。
2. 求双方的最大最小策略。
3. 通过数学表达说明最优反应策略与最大最小策略一致。

## **Kai**

定和を $c$ とすれば

$$
a_i+b_i=c\qquad(i=1,2,3,4)
$$

である。

### (1)
A, B の期待利得はそれぞれ

$$
\begin{aligned}
u_A(p,q)
&=pq a_1+p(1-q)a_2+(1-p)q a_3+(1-p)(1-q)a_4,\\
u_B(p,q)
&=pq b_1+p(1-q)b_2+(1-p)q b_3+(1-p)(1-q)b_4
\end{aligned}
$$

であり，$u_A+u_B=c$ である。

$q$ を固定したとき，A が戦略 1 を選ぶことによる期待利得の差を

$$
\Delta_A(q)=q(a_1-a_3)+(1-q)(a_2-a_4)
$$

とおくと

$$
\boxed{
\operatorname{BR}_A(q)=
\begin{cases}
\{1\},&\Delta_A(q)>0,\\
\{2\},&\Delta_A(q)<0,\\
\{1,2\}\text{ の任意の混合},&\Delta_A(q)=0.
\end{cases}}
$$

同様に，$p$ を固定したとき

$$
\Delta_B(p)=p(b_1-b_2)+(1-p)(b_3-b_4)
$$

より

$$
\boxed{
\operatorname{BR}_B(p)=
\begin{cases}
\{1\},&\Delta_B(p)>0,\\
\{2\},&\Delta_B(p)<0,\\
\{1,2\}\text{ の任意の混合},&\Delta_B(p)=0.
\end{cases}}
$$

### (2)
B が純粋戦略 1, 2 を選んだときの A の期待利得を

$$
g_1(p)=pa_1+(1-p)a_3,\qquad
g_2(p)=pa_2+(1-p)a_4
$$

とおく。したがって A のマックスミニ戦略は

$$
\boxed{p^{\mathrm M}\in\mathop{\arg\max}_{0\le p\le1}
\min\{g_1(p),g_2(p)\}}.
$$

一方，定和性から B のマックスミニ戦略は，A の利得についてのミニマックス戦略であり，

$$
\begin{aligned}
h_1(q)&=qa_1+(1-q)a_2,\\
h_2(q)&=qa_3+(1-q)a_4
\end{aligned}
$$

を用いて

$$
\boxed{q^{\mathrm M}\in\mathop{\arg\min}_{0\le q\le1}
\max\{h_1(q),h_2(q)\}}
$$

と書ける。

純粋戦略の鞍点がない場合，

$$
D=a_1-a_2-a_3+a_4
$$

とおけば $D\ne0$ であり，二直線の交点から

$$
\boxed{
p^{\mathrm M}=\frac{a_4-a_3}{D}
=\frac{b_4-b_3}{D_B},\qquad
q^{\mathrm M}=\frac{a_4-a_2}{D}
=\frac{b_4-b_2}{D_B}}
$$

を得る。ただし $D_B=b_1-b_2-b_3+b_4=-D$ である。
この場合は $0<p^{\mathrm M},q^{\mathrm M}<1$ であり，A のゲーム値は

$$
\boxed{v_A=\frac{a_1a_4-a_2a_3}{D}},
\qquad v_B=c-v_A
$$

である。

境界の場合も上の最適化式で処理できる。具体的には，A は $p=0,1$ と，$D\ne0$ かつ $0\le(a_4-a_3)/D\le1$ ならその交点を比較すればよい。B も $q=0,1$ と対応する交点を比較する。

純粋戦略 $(i,j)$ が解となる条件は次のとおりである。

| 鞍点 | 条件 |
|:---:|:---|
| $(1,1)$ | $a_3\le a_1\le a_2$ |
| $(1,2)$ | $a_4\le a_2\le a_1$ |
| $(2,1)$ | $a_1\le a_3\le a_4$ |
| $(2,2)$ | $a_2\le a_4\le a_3$ |

等号があれば複数の最適混合戦略があり得る。$D=0$ や交点が区間外にある場合も，端点比較により純粋戦略またはその凸結合が得られる。

### (3)
$(p^*,q^*)$ が互いに最適反応ならば，任意の $p,q\in[0,1]$ に対して

$$
u_A(p,q^*)\le u_A(p^*,q^*),
\qquad
u_B(p^*,q)\le u_B(p^*,q^*)
$$

が成り立つ。$u_A+u_B=c$ より第 2 式は

$$
u_A(p^*,q^*)\le u_A(p^*,q)
$$

と同値である。ゆえに

$$
u_A(p,q^*)\le u_A(p^*,q^*)\le u_A(p^*,q),
$$

すなわち $(p^*,q^*)$ は鞍点である。したがって

$$
\max_p\min_q u_A(p,q)
=u_A(p^*,q^*)
=\min_q\max_p u_A(p,q).
$$

逆に，A のマックスミニ戦略 $p^{\mathrm M}$ と B のマックスミニ戦略 $q^{\mathrm M}$ を組み合わせれば，上式の左右から同じ鞍点不等式を得るので，両者は互いに最適反応である。よって

$$
\boxed{\text{定和ゲームでは，最適反応の均衡戦略とマックスミニ戦略は一致する。}}
$$
