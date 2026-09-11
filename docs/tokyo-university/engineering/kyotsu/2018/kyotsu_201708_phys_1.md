---
sidebar_label: '2017年8月実施 物理学 第1問'
tags:
  - Tokyo-University
  - Physics.Mechanics.Rocket-Equation-and-Attitude-Stability
---

# 東京大学 工学系研究科 2017年8月実施 物理学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### I

鉛直上向き $+z$ 方向に飛行するロケットを考える。ガスをロケットに対して一定の相対速度 $u$ で進行方向の逆向きに噴射して推進力を得る。重力や空気抵抗など、推進力以外の力は働かないとする。

![ロケットの噴射と姿勢制御に作用する力](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2018/kyotsu_201708_phys_1_rocket_audited.svg)

1. 時刻 $t$ から $t+dt$ の間に、ロケットの質量が $m$ から $m+dm\ (dm<0)$、速度が $v$ から $v+dv$ に変化する。噴射されたガスの質量は $-dm>0$ である。噴射前後の運動量保存から $dv,dm,m,u$ の関係を求めよ。$dv\,dm$ などの二次の微小量は無視してよい。
2. 噴射を続けて質量が $m_i$ から $m_f$ に減少したときの速度増加量を求めよ。

### II

I のロケットに、鉛直下向き $-z$ 方向の重力加速度 $g$ が働くとする。

1. 単位時間あたりの噴射質量を一定とし、正の定数 $k$ により

$$
m=m_i(1-kt)
$$

と表されるとする。微小時間の運動量変化から $dv/dt$ を $t$ の関数として求めよ。

2. 質量が $m_i$ から $m_f$ に減少し、速度が $v_i$ から $v_f$ に変化したとき、$v_f$ を求めよ。

### III

大気中を鉛直上向きに飛行するロケットが、図の $zx$ 平面内だけを運動するとする。機軸の $+z$ 方向からの傾きを $\theta$ とし、その初期値は零でない微小量とする。重心 G から機軸に沿って前方に距離 $\ell_1$ の位置に、水平 $+x$ 方向の力 $L=K_L\theta$ と鉛直 $-z$ 方向の力 $D=K_D\theta$ が働く。$K_L,K_D$ は正の定数である。

G から機軸に沿って後方に距離 $\ell_2$ の末端にエンジンがあり、一定の大きさ $F$ の推力を与える。推力方向を制御し、機軸からの角を図のように $\delta$ とする。図の正の $\delta$ は推力が機軸より左向きに傾く向きである。G を通り $zx$ 平面に垂直な軸のまわりの慣性モーメント $I$ は一定とする。$\theta,\delta$ は十分小さく、$\sin\theta\simeq\theta$, $\sin\delta\simeq\delta$, $\cos\theta\simeq\cos\delta\simeq1$ と近似する。

1. G のまわりの回転運動の方程式を立て、$\theta(t)$ の二階微分方程式を求めよ。$\theta^2$ の項は無視せよ。
2. $\delta=0$ のとき、$|\theta|$ が時間とともに増加することを示せ。
3. $\delta=\alpha\theta$ と制御するとき、$t\to\infty$ で $\theta\to0$ となる定数 $\alpha$ の条件を求めよ。
4. $\delta=\alpha\theta+\beta\,d\theta/dt$ と制御するとき、$t\to\infty$ で $\theta\to0$ となる定数 $\alpha,\beta$ の条件を求めよ。

#### 题目描述

I. 火箭沿竖直向上 $+z$ 方向飞行，向反方向以相对于火箭恒定的速度 $u$ 喷气产生推力。忽略重力、空气阻力等推力以外的力。

1. 从 $t$ 到 $t+dt$，火箭质量由 $m$ 变为 $m+dm\ (dm<0)$，速度由 $v$ 变为 $v+dv$，喷出气体质量为 $-dm>0$。由喷气前后动量守恒，求 $dv,dm,m,u$ 的关系；忽略 $dv\,dm$ 等二阶微小量。
2. 连续喷气使质量由 $m_i$ 减少到 $m_f$，求速度增量。

II. 令 I 中的火箭受到向下 $-z$ 方向的重力加速度 $g$。

1. 单位时间喷出质量恒定，且 $m=m_i(1-kt)$，其中 $k>0$。根据微小时间内的动量变化，求 $dv/dt$ 关于 $t$ 的表达式。
2. 质量从 $m_i$ 减少到 $m_f$、速度从 $v_i$ 增至 $v_f$ 时，求 $v_f$。

III. 火箭在大气中向 $+z$ 方向飞行，仅在图示 $zx$ 平面内运动。机轴相对 $+z$ 方向倾斜 $\theta$，初值为非零微小量。在沿机轴距质心 G 前方 $\ell_1$ 处，分别作用沿 $+x$ 方向的力 $L=K_L\theta$ 和沿 $-z$ 方向的力 $D=K_D\theta$，$K_L,K_D>0$。距 G 后方 $\ell_2$ 的尾端装有发动机，产生大小恒定、方向可控的力 $F$。推力相对于机轴的角度按图定义为 $\delta$，图中正 $\delta$ 对应推力向机轴左侧偏转。绕 G 且垂直于 $zx$ 平面的轴的转动惯量 $I$ 不随时间变化。由于 $\theta,\delta$ 很小，可取 $\sin\theta\simeq\theta$, $\sin\delta\simeq\delta$, $\cos\theta\simeq\cos\delta\simeq1$。

1. 建立绕 G 的转动方程，求 $\theta(t)$ 的二阶微分方程，忽略 $\theta^2$ 项。
2. 证明 $\delta=0$ 时 $|\theta|$ 随时间增加。
3. 若控制规律为 $\delta=\alpha\theta$，求使 $t\to\infty$ 时 $\theta\to0$ 的常数 $\alpha$ 的条件。
4. 若控制规律为 $\delta=\alpha\theta+\beta\,d\theta/dt$，求使 $t\to\infty$ 时 $\theta\to0$ 的常数 $\alpha,\beta$ 的条件。

## **Kai**

### I

1. 噴射直後のガスの速度は一次の精度で $v-u$ である。運動量保存より、

$$
mv=(m+dm)(v+dv)+(-dm)(v-u),
$$

したがって、

$$
\boxed{m\,dv=-u\,dm}.
$$

2. 積分して、

$$
\boxed{\Delta v=-u\int_{m_i}^{m_f}\frac{dm}{m}
=u\log\frac{m_i}{m_f}}.
$$

### II

1. 重力の力積を加えると $m\,dv=-u\,dm-mg\,dt$。よって、

$$
\boxed{\frac{dv}{dt}=\frac{uk}{1-kt}-g}.
$$

2. 燃焼終了時刻は $t_f=(1-m_f/m_i)/k$ だから、

$$
\boxed{v_f=v_i+u\log\frac{m_i}{m_f}
-\frac gk\left(1-\frac{m_f}{m_i}\right)}.
$$

### III

1. 図の $\theta$ の増加方向を正としたモーメントのつり合いは

$$
I\ddot\theta=\ell_1L\cos\theta+\ell_1D\sin\theta
+\ell_2F\sin\delta.
$$

$D\sin\theta$ は二次の項なので、線形化すると

$$
\boxed{I\ddot\theta=K_L\ell_1\theta+F\ell_2\delta}.
$$

2. $\lambda=\sqrt{K_L\ell_1/I}>0$ と置くと、

$$
\theta(t)=A e^{\lambda t}+B e^{-\lambda t}.
$$

初期角速度が零の場合、$\theta(t)=\theta(0)\cosh(\lambda t)$ であり、$t>0$ で $|\theta|$ が増加する。一般にも増大モードを持つため、無制御の姿勢は不安定である。

3. $a=K_L\ell_1+F\ell_2\alpha$ とすると、$I\ddot\theta=a\theta$ となる。

- $a>0$：指数的な増大モードがある。
- $a=0$：$\theta=A+Bt$ となる。
- $a<0$：減衰しない単振動となる。

したがって、任意の微小な初期摂動に対して $\theta\to0$ を保証する

$$
\boxed{\alpha\text{ は存在しない}}.
$$

4. 閉ループの特性方程式は

$$
Is^2-F\ell_2\beta s-(K_L\ell_1+F\ell_2\alpha)=0.
$$

両根の実部が負になるための必要十分条件は、$s$ の係数と定数項がともに正であることなので、

$$
\boxed{\beta<0,\qquad \alpha<-\frac{K_L\ell_1}{F\ell_2}}.
$$

