---
sidebar_label: '2013年8月実施 数学 第4問'
tags:
  - Tokyo-University
  - Mathematics.Vector-Calculus.Parametric-Surface
  - Mathematics.Vector-Calculus.Surface-Normal
  - Mathematics.Calculus.Surface-Area-by-Double-Integral
---

# 東京大学 工学系研究科 2013年8月実施 数学 第4問

## **Author**
祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

I. 直線 $L_v(u)=(u\cos v,u\sin v,v)$ において $v$ を連続的に変化させると、常螺面 $S(u,v)=L_v(u)$ を得る。点 $S(u,v)$ における法線ベクトルを求めよ。

II. $-1\le u\le1,0\le v\le2\pi$ に対応する部分の面積を求めよ。$u=\sinh t$ と置換してよい。

III. $R(v)=S(1,v)=(\cos v,\sin v,v)$ とする。点 $R(v)$ における接線を、$T_v(0)=R(v)$ を満たす媒介変数表示 $T_v(w)$ で表せ。

IV. 曲面 $D(v,w)=T_v(w)$ を考える。(1) $w\ne0$ のときの法線ベクトルを求めよ。
(2) 任意の $w_1,w_2\ne0$ と同一の $v$ に対し、二点の法線ベクトルが平行であることを示せ。

![常螺面](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2014/kyotsu_201308_math_4_helicoid.svg)

#### 题目描述

I. 直线 $L_v(u)=(u\cos v,u\sin v,v)$ 扫过常螺面 $S(u,v)=L_v(u)$。求 $S$ 在 $(u,v)$ 处的法向量。

II. 求 $-1\le u\le1,\ 0\le v\le2\pi$ 对应曲面的面积。可用代换 $u=\sinh t$。

III. 令 $R(v)=S(1,v)=(\cos v,\sin v,v)$。求经过 $R(v)$、满足 $T_v(0)=R(v)$ 的切线参数式 $T_v(w)$。

IV. 令 $D(v,w)=T_v(w)$。(1) 当 $w\ne0$ 时求曲面的法向量；(2) 证明固定 $v$ 时，任意非零 $w_1,w_2$ 处的法向量平行。

## **Kai**

### I–II

$$
S_u=(\cos v,\sin v,0),\qquad S_v=(-u\sin v,u\cos v,1),
$$

従って法線ベクトルは $\boxed{S_u\times S_v=(\sin v,-\cos v,u)}$ と取れ、長さは $\sqrt{1+u^2}$ である。
面積は

$$
\boxed{\int_0^{2\pi}\int_{-1}^1\sqrt{1+u^2}\,du\,dv
=2\pi\left(\sqrt2+\log(1+\sqrt2)\right)}.
$$

### III

$R'(v)=(-\sin v,\cos v,1)$ より、

$$
\boxed{T_v(w)=(\cos v-w\sin v,\ \sin v+w\cos v,\ v+w)}.
$$

### IV

$$
D_v=(-\sin v-w\cos v,\cos v-w\sin v,1),\quad
D_w=(-\sin v,\cos v,1).
$$

従って、

$$
\boxed{D_v\times D_w=w(-\sin v,\cos v,-1)}.
$$

$w\ne0$ では非零である。$v$ を固定すると非零の実数倍だけが変わるので、二つの法線ベクトルは平行である。
