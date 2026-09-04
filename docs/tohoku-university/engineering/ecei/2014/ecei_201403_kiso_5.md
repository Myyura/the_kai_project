---
sidebar_label: 2014年3月実施 基礎科目 問題5 物理基礎1
tags:
  - Tohoku-University
  - Physics.Mechanics
  - Mathematics.Calculus.Integration
---

# 東北大学 工学研究科 電気・情報系 2014年3月実施 基礎科目 問題5 物理基礎1

## **Author**


祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原題

Fig. 5 (a)に示すように，床に固定された半径 $b$（$b>a$）の剛体球の頂点に半径 $a$ の均質な剛体球殻 $S$ が置かれている。球殻 $S$ の質量を $m$ とする。球殻 $S$ の厚みは無視できる。重力加速度を $g$ とする。以下の問に答えよ。

(1) 球と球殻 $S$ の接触がなめらかな場合を考える。球殻 $S$ の重心 $C$ に水平初速度 $v_0$ を与えた後，球殻 $S$ は $C$ の周りで回転することなくすべり落ちた。

- (a) Fig. 5 (b)に示すように，球殻 $S$ が球面上の点 $P$ にあるとき $OP$ と垂直軸のなす角度を $\theta$ とする。球面上の点 $P$ での球殻 $S$ の重心 $C$ の速度を $v$ とする。$v$ と $v_0$ の関係を求めよ。
- (b) 球殻 $S$ が球から受ける抗力を $R$ とし，$R$ を $a,b,m,g,v_0,\theta$ を用いて表せ。
- (c) 球殻 $S$ が球から離れる角度を $\theta_c$ とする。$\cos\theta_c$ を求めよ。

(2) 球と球殻 $S$ の接触がなめらかでない場合を考える。ただし，球と球殻 $S$ の間に粘着力はない。

- (a) 球殻 $S$ の中心軸の周りの慣性モーメントが $\frac23ma^2$ で与えられることを示せ。
- (b) 球殻 $S$ がすべることなくゆっくりと転がり落ちると考える。球殻 $S$ が球から離れる角度を $\theta_c$ とする。$\cos\theta_c$ を求めよ。ただし，$v_0$ は $0$ に等しいと考える（$v_0\cong0$）。転がり摩擦によるエネルギー損失は無視する。

### 题目描述

质量为 $m$、半径为 $a$ 的均匀薄球壳，置于固定球体（半径 $b>a$）的顶部，重力加速度为 $g$。记固定球心为 $O$、球壳中心为 $C$、接触点为 $P$，$O,P,C$ 共线，$OC=a+b$；$\theta$ 为 $OP$ 与竖直向上方向的夹角。

1. 接触面光滑，给球壳质心水平初速度 $v_0$，此后球壳不自转而滑下。(a) 求速度 $v$ 与 $v_0,\theta$ 的关系；(b) 求支持力 $R$；(c) 求脱离时的 $\cos\theta_c$。
2. 接触面不光滑但无黏着力。(a) 证明球壳绕中心轴的转动惯量为 $\frac23ma^2$；(b) 球壳从顶部以可忽略初速度无滑动滚下，忽略滚动耗散，求脱离时的 $\cos\theta_c$。

## **Kai**

令 $\ell=a+b$。

### (1)

(a) 机械能守恒给出

$$
\frac12mv^2=\frac12mv_0^2+mg\ell(1-\cos\theta),\qquad
\boxed{v^2=v_0^2+2g\ell(1-\cos\theta)}.
$$

(b) 沿指向 $O$ 的方向列运动方程：

$$
mg\cos\theta-R=\frac{mv^2}{\ell},\qquad
\boxed{R=m\left(3g\cos\theta-2g-\frac{v_0^2}{\ell}\right)}.
$$

(c) 令 $R=0$，得

$$
\boxed{\cos\theta_c=\frac23+\frac{v_0^2}{3g\ell}}.
$$

此式适用于 $v_0^2\le g\ell$；若 $v_0^2>g\ell$，球壳在起始点即脱离。

### (2)

(a) 令面密度 $\sigma=m/(4\pi a^2)$，以极角 $\varphi$ 分割球面：

$$
I=\int_0^\pi (a\sin\varphi)^2\sigma\,2\pi a^2\sin\varphi\,d\varphi
=\boxed{\frac23ma^2}.
$$

(b) 无滑动条件为 $v=a\omega$。于是

$$
mg\ell(1-\cos\theta)=\frac12mv^2+\frac12I\omega^2=\frac56mv^2.
$$

脱离时 $v^2=g\ell\cos\theta_c$，故

$$
\frac56\cos\theta_c=1-\cos\theta_c,\qquad\boxed{\cos\theta_c=\frac6{11}}.
$$
