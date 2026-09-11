---
sidebar_label: '2018年8月実施 物理学 第4問'
tags:
  - Tokyo-University
  - Physics.Mechanics.Damped-Harmonic-Motion
---

# 東京大学 工学系研究科 2018年8月実施 物理学 第4問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

加速度センサの原理を考える。中空の剛体箱の中で、質量 $m$ の物体が、バネ定数 $k$ のバネと、相対速度に比例する抵抗力を発生する係数 $c$ のダッシュポットにより箱と結ばれている。箱と物体は回転せず、図の上下方向だけに動く。下向きを正とし、空間上の箱の座標を $x$、バネの自然長を原点とした物体の箱に対する相対座標を $y$ とする。時間を $t$ とし、重力を無視する。

### I

物体に働く慣性力を $m,x,y,t$ で表せ。

### II

バネの復元力は $-ky$、ダッシュポットの抵抗力は $-c\,dy/dt$ である。物体の運動方程式を示せ。

### III

箱が $x=a\cos\omega t$ と振動するとき、定常応答のみを考える。$\omega_0=\sqrt{k/m}$、$\gamma=c/(2\sqrt{mk})$、$\mu=\omega/\omega_0$ とする。

1. $y=y_0\cos(\omega t-\beta)$ と表したとき、$y_0$ と $\beta$ を求めよ。
2. $c=0$ と $c=2\sqrt{mk}$ のそれぞれについて、$y_0$ と $\mu$ の関係を図示せよ（縦軸を $y_0/a$ に規格化してよい）。
3. $\omega\gg\omega_0$ の場合、$y_0,\beta$ を近似的に求め、$y$ の測定から箱の変位 $x$ を求める方法を述べよ。
4. $\omega\ll\omega_0$ の場合、$y_0,\beta$ を近似的に求め、$y$ の測定から箱の加速度を求める方法を述べよ。

![センサの構造と振幅の周波数応答](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tokyo_university/engineering/kyotsu/2019/kyotsu_201808_phys_4_diagram_audited.svg)

#### 题目描述

刚性空心箱内，质量为 $m$ 的物体通过劲度系数为 $k$ 的弹簧和阻尼系数为 $c$ 的阻尼器与箱连接。箱和物体只作上下平动，不转动，忽略重力。取向下为正，箱的绝对坐标为 $x$，以弹簧自然长度位置为原点，物体相对箱的坐标为 $y$，时间为 $t$。

I. 用 $m,x,y,t$ 表示物体的惯性力。

II. 弹簧力为 $-ky$，阻尼力为 $-c\,dy/dt$，写出运动方程。

III. 箱作 $x=a\cos\omega t$ 的振动，只考虑定常响应。定义 $\omega_0=\sqrt{k/m}$、$\gamma=c/(2\sqrt{mk})$、$\mu=\omega/\omega_0$。

1. 将响应写为 $y=y_0\cos(\omega t-\beta)$，求振幅与相位。
2. 分别画出 $c=0$、$c=2\sqrt{mk}$ 时 $y_0$ 随 $\mu$ 的曲线（可将纵轴归一化为 $y_0/a$）。
3. 当 $\omega\gg\omega_0$ 时，近似求 $y_0,\beta$，并说明如何通过测量 $y$ 求箱的位移。
4. 当 $\omega\ll\omega_0$ 时，近似求 $y_0,\beta$，并说明如何通过测量 $y$ 求箱的加速度。

## **Kai**

### I

物体の絶対加速度は $\ddot x+\ddot y$。したがってダランベールの慣性力は

$$
\boxed{F_{\mathrm{in}}=-m(\ddot x+\ddot y)}.
$$

### II

$m(\ddot x+\ddot y)=-ky-c\dot y$ より

$$
\boxed{m\ddot y+c\dot y+ky=-m\ddot x}.
$$

箱に固定した座標系では、右辺の $-m\ddot x$ が見かけの慣性力である。

### III

#### III.1

$-\ddot x=a\omega^2\cos\omega t$ なので、複素振幅は

$$
Y=\frac{a\omega^2}{\omega_0^2-\omega^2+i(c/m)\omega}
=\frac{a\mu^2}{1-\mu^2+2i\gamma\mu}.
$$

したがって

$$
\boxed{y_0=\frac{a\mu^2}{\sqrt{(1-\mu^2)^2+4\gamma^2\mu^2}}},\qquad
\boxed{\beta=\operatorname{atan2}(2\gamma\mu,1-\mu^2)}.
$$

$0\le\beta\le\pi$ として象限を選ぶ。$c=0,\mu=1$ では共鳴し、有界な定常解は存在しない。

#### III.2

$$
\boxed{\frac{y_0}{a}=\begin{cases}
\displaystyle\frac{\mu^2}{|1-\mu^2|},&c=0,\\[6pt]
\displaystyle\frac{\mu^2}{1+\mu^2},&c=2\sqrt{mk}.
\end{cases}}
$$

前者は $\mu=1$ で発散し、$\mu>1$ では上から 1 に近づく。後者は単調増加し、$\mu=1$ で $1/2$、無限大では下から 1 に近づく。

#### III.3

$\gamma$ 一定で $\mu\gg1$ とすると、$y_0\simeq a$、$\beta\simeq\pi$。よって

$$
\boxed{x(t)\simeq-y(t)}.
$$

物体が慣性によってほぼ静止し、箱との相対変位が箱の変位の逆符号となる。

#### III.4

$\mu\ll1$ では $y_0\simeq a\mu^2$、$\beta\simeq0$、$y\simeq a\mu^2\cos\omega t$ だから

$$
\boxed{\ddot x(t)\simeq-\omega_0^2y(t)=-\frac{k}{m}y(t)}.
$$

相対変位に既知の比例係数 $-k/m$ を掛ければ加速度を得る。

