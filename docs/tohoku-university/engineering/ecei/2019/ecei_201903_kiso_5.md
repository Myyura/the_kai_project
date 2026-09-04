---
sidebar_label: 2019年3月実施 基礎科目 問題5 物理基礎
tags:
  - Tohoku-University
  - Mathematics.Vector-Calculus
  - Physics.Mechanics.Center-of-Mass-and-Angular-Momentum
---
# 東北大学 工学研究科 電気・情報系 2019年3月実施 基礎科目 問題5 物理基礎

## **Author**
祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語原文

時間に依存しないポテンシャル $V$ で相互作用する，$N$ 個の粒子からなる系を考察する。$i$ 番目の粒子 $(i=1,2,\cdots,N)$ の運動方程式は以下のように書ける。

$$
m_i\frac{d^2\boldsymbol r_i}{dt^2}=-\boldsymbol\nabla_iV(\boldsymbol r_1,\boldsymbol r_2,\cdots,\boldsymbol r_N)
$$

ここで，$m_i$ と $\boldsymbol r_i$ は $i$ 番目の粒子の質量と位置ベクトルである。また，$x_i,y_i,z_i$ を $\boldsymbol r_i$ の直交座標成分として，$\boldsymbol\nabla_iV=(\partial V/\partial x_i,\partial V/\partial y_i,\partial V/\partial z_i)$ である。

(1) 全エネルギー

$$
E=\sum_{i=1}^N\frac12m_i\frac{d\boldsymbol r_i}{dt}\cdot\frac{d\boldsymbol r_i}{dt}+V
$$

が保存されること，即ち，$dE/dt=0$ を示せ。

(2) $V$ が任意の無限小平行移動 $\delta\boldsymbol x$ に関して不変である，つまり，

$$
V(\boldsymbol r_1+\delta\boldsymbol x,\boldsymbol r_2+\delta\boldsymbol x,\cdots,\boldsymbol r_N+\delta\boldsymbol x)=V(\boldsymbol r_1,\boldsymbol r_2,\cdots,\boldsymbol r_N)\tag{5A}
$$

と仮定する。

(a) 以下の関係を導出せよ。

$$
\sum_{i=1}^N\boldsymbol\nabla_iV=\sum_{i=1}^N\left(\frac{\partial V}{\partial x_i},\frac{\partial V}{\partial y_i},\frac{\partial V}{\partial z_i}\right)=\boldsymbol0
$$

(b) 全運動量

$$
\boldsymbol P=\sum_{i=1}^Nm_i\frac{d\boldsymbol r_i}{dt}
$$

が保存されること，即ち，$d\boldsymbol P/dt=\boldsymbol0$ を示せ。

(3) $V$ が任意の無限小回転 $\delta\boldsymbol\theta$ に関して不変である，つまり，

$$
V(\boldsymbol r_1+\delta\boldsymbol\theta\times\boldsymbol r_1,\boldsymbol r_2+\delta\boldsymbol\theta\times\boldsymbol r_2,\cdots,\boldsymbol r_N+\delta\boldsymbol\theta\times\boldsymbol r_N)=V(\boldsymbol r_1,\boldsymbol r_2,\cdots,\boldsymbol r_N)\tag{5B}
$$

と仮定する。ここで，記号 $\times$ は外積を表す。

(a) 全角運動量

$$
\boldsymbol L=\sum_{i=1}^N\boldsymbol r_i\times m_i\frac{d\boldsymbol r_i}{dt}
$$

が保存されること，即ち，$d\boldsymbol L/dt=\boldsymbol0$ を示せ。必要ならば，$\boldsymbol a\cdot(\boldsymbol b\times\boldsymbol c)=\boldsymbol b\cdot(\boldsymbol c\times\boldsymbol a)$ を用いよ。

(b) $\boldsymbol L$ が原点の選択に依存しないとき，系の運動が満たすべき条件を示せ。ここで $V$ は Eq. (5A) も満たし，従って，任意の原点に対して $d\boldsymbol L/dt=\boldsymbol0$ であると仮定する。

### 题目描述

$N$ 个质点通过无显式时间依赖的势 $V(\boldsymbol r_1,\ldots,\boldsymbol r_N)$ 相互作用，运动方程为 $m_i\ddot{\boldsymbol r}_i=-\nabla_i V$。

(1) 证明总能量 $E=\sum_i m_i|\dot{\boldsymbol r}_i|^2/2+V$ 守恒。

(2) 若势对任意无穷小平移 $\boldsymbol a$ 不变：$V(\boldsymbol r_1+\boldsymbol a,\ldots)=V(\boldsymbol r_1,\ldots)$，证明 (a) $\sum_i\nabla_iV=0$；(b) 总动量 $\boldsymbol P=\sum_i m_i\dot{\boldsymbol r}_i$ 守恒。

(3) 若势对任意无穷小转动 $\delta\boldsymbol\theta$ 不变：

$$
V(\boldsymbol r_1+\delta\boldsymbol\theta\times\boldsymbol r_1,\ldots)=V(\boldsymbol r_1,\ldots),
$$

(a) 证明总角动量 $\boldsymbol L=\sum_i\boldsymbol r_i\times m_i\dot{\boldsymbol r}_i$ 守恒；(b) 在平移对称也成立的条件下，求 $\boldsymbol L$ 与坐标原点选择无关的条件。

## **Kai**

### (1)

由链式法则及运动方程，

$$
\frac{dE}{dt}=\sum_i\dot{\boldsymbol r}_i\cdot(m_i\ddot{\boldsymbol r}_i+\nabla_iV)=0.
$$

### (2)

(a) 平移不变性的一阶项为 $\boldsymbol a\cdot\sum_i\nabla_iV=0$。因 $\boldsymbol a$ 任意，

$$
\boxed{\sum_i\nabla_iV=0}.
$$

(b) $\displaystyle\dot{\boldsymbol P}=\sum_i m_i\ddot{\boldsymbol r}_i=-\sum_i\nabla_iV=0$。

### (3)

(a) 转动不变性给出

$$
0=\sum_i\nabla_iV\cdot(\delta\boldsymbol\theta\times\boldsymbol r_i)=\delta\boldsymbol\theta\cdot\sum_i(\boldsymbol r_i\times\nabla_iV).
$$

因 $\delta\boldsymbol\theta$ 任意，$\sum_i\boldsymbol r_i\times\nabla_iV=0$，于是

$$
\dot{\boldsymbol L}=\sum_i\left(\dot{\boldsymbol r}_i\times m_i\dot{\boldsymbol r}_i+\boldsymbol r_i\times m_i\ddot{\boldsymbol r}_i\right)=0.
$$

(b) 将原点平移 $\boldsymbol a$ 后，

$$
\boldsymbol L'=\sum_i(\boldsymbol r_i-\boldsymbol a)\times m_i\dot{\boldsymbol r}_i=\boldsymbol L-\boldsymbol a\times\boldsymbol P.
$$

故对任意原点均有 $\boldsymbol L'=\boldsymbol L$ 的充要条件是 $\boxed{\boldsymbol P=\boldsymbol0}$。由动量守恒，只需初始总动量为零。
