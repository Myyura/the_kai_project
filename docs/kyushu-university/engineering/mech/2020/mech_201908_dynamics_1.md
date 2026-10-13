---
sidebar_label: "2020年度 問1（機械力学）"
tags:
  - Kyushu-University
  - Physics.Mechanics.Connected-Particles-and-Tension
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
---

# 九州大学 工学府 機械系専攻 2020年度 機械力学 問1

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

重力加速度を $g$ とする。ロープは伸びず、滑車との間ですべらず、ロープの質量と滑車軸の摩擦は無視する。

1. 質量を無視できる定滑車にロープをかけ、左端に質量 $2m$、右端に質量 $3m$ の物体をつるす。$2m$ の物体の上向き変位を $x$ として、その加速度を求めよ。
2. (1) の質量 $3m$ を $\alpha m$（$\alpha>0$）に変えた場合、$2m$ の物体の加速度が $\alpha$ によってどう変化するか説明せよ。
3. 次の配置では、質量 $2m$ の物体は質量を無視できる動滑車につるされている。ロープの一端 A を天井に固定し、動滑車の下を回して B 側を上に延ばす。そのロープを半径 $r$、質量 $9m$ の一様な円板である定滑車にかけ、他端 C に質量 $3m$ の物体をつるす。$2m$ の物体の上向き変位を $y$ とし、その加速度を求めよ。
4. (3) の定滑車に時計回りのトルク $T$ を加え、$2m$ の物体の上向き加速度を $g$ としたい。必要な $T$ を求めよ。

#### 题目描述

忽略绳质量、伸长、绳轮滑动与轴摩擦。① 无质量定滑轮两侧悬挂 $2m,3m$，求 $2m$ 向上的加速度。② 将 $3m$ 改为 $\alpha m$，说明加速度如何变化。③ $2m$ 改挂于无质量动滑轮，绳的一端 A 固定在天花板，绕过动滑轮后 B 侧向上，跨过质量 $9m$、半径 $r$ 的均匀圆盘定滑轮，C 端悬挂 $3m$，求 $2m$ 向上的加速度。④ 对定滑轮施加顺时针力矩，形式上使 $2m$ 向上加速度达到 $g$，求力矩并检查绳张力条件。

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
2m\ddot y=2F-2mg,\qquad
6m\ddot y=3mg-F_C,\qquad
\frac{9mr^2}{2}\frac{2\ddot y}{r}=(F_C-F)r.
$$

消去して

$$
\boxed{\ddot y=\frac g8},\qquad F_A=F_B=\frac98mg,\qquad F_C=\frac94mg.
$$

### (4)

最後の回転方程式を $9mr\ddot y=(F_C-F)r+T$ に替えると

$$
\ddot y=\frac{2mg+T/r}{16m},\qquad
F=m(\ddot y+g),\qquad F_C=3mg-6m\ddot y.
$$

$\ddot y=g$ を形式的に代入すれば

$$
\boxed{T=14mgr},\qquad F_A=F_B=2mg,\qquad F_C=-3mg.
$$

ただし、ロープは圧縮力を伝えないため、負の $F_C$ は実現できない。$F_C\ge0$ の範囲は $\ddot y\le g/2$、すなわち $T\le6mgr$ である。したがって、全ロープが張った原題の拘束条件を保ちながら $\ddot y=g$ とする物理的な解は存在しない。

## **Reference**

- [九州大学 2020年度 機械力学 公式問題（PDF 1ページ）](https://www.mech.kyushu-u.ac.jp/wp/wp-content/uploads/2020/11/2020-dynamics.pdf)
