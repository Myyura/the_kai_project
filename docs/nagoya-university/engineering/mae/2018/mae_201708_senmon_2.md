---
sidebar_label: "2017年8月実施 専門部門 問題2（流体力学）"
tags:
  - Nagoya-University
  - Engineering.Fluid-Mechanics.Bernoulli-Equation
  - Engineering.Fluid-Mechanics.Falling-Film
---

# 名古屋大学 工学研究科 機械航空系 2017年8月実施 専門部門 問題2

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### (1)

大気に開いた断面積 $S_A,S_B$ の容器 A、B を、底部の面積 $\sigma$ の小孔で接続する。$\sigma\ll S_A,S_B$ とし、密度一定の非粘性液体が A から B へ流れる。自由表面は水平で、小孔の中心を基準とする高さを $z_A,z_B$ とする。初期値は $z_A(0)=h_A>h_B=z_B(0)$、重力加速度は $g$。

1. 微小な水位変化 $\Delta z_A,\Delta z_B$ の関係を求めよ。
2. 水位差を用いて小孔流速 $v$ を求めよ。
3. 水位差 $h=z_A-z_B$ の時間変化を求めよ。

### (2)

水平面から角度 $\theta$ 傾いた平板上を、密度 $\rho$、粘度 $\mu$ の非圧縮ニュートン流体が厚さ $h$ の液膜として定常層流で流下する。斜面下向きを $x$、壁面から垂直外向きを $y$ とし、速度は $x$ 方向の $v(y)$ のみである。壁面では滑りなし、自由表面のせん断応力はゼロとする。

1. せん断応力 $\tau(y)$ の微分方程式を導け。
2. 自由表面速度を $V=v(h)$ として $v=V(y/h)(2-y/h)$ を示せ。
3. 単位幅当たり流量 $Q$ を求め、$h$ と $Q$ の関係を示せ。

![連通容器と斜面上の液膜](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/nagoya-university/engineering/mae/2018/nagoya201708_specialist2.svg)

#### 题目描述

（1）两个向大气敞开的容器 A、B 截面积分别为 $S_A,S_B$，由底部面积为 $\sigma\ll S_A,S_B$ 的小孔连通。无黏、恒密度液体从 A 流向 B，液面保持水平；以孔中心为基准，高度为 $z_A,z_B$，初值为 $h_A>h_B$，重力加速度为 $g$。求两侧微小液位变化的关系、小孔速度，以及液位差 $h=z_A-z_B$ 随时间的变化。（2）密度 $\rho$、黏度 $\mu$ 的不可压牛顿流体以厚度 $h$ 在倾角 $\theta$ 的平板上稳态层流流动；$x$ 沿下坡方向，$y$ 为向外法向，速度为 $v(y)$，壁面无滑移，液面剪应力为零。推导剪应力方程，以液面速度 $V$ 表示速度分布，并求单位宽流量 $Q$ 及膜厚与流量的关系。

## **Kai**

### (1)

#### 1), 2)

質量保存から

$$
\boxed{S_A\Delta z_A+S_B\Delta z_B=0}.
$$

自由表面の速度を小孔速度に比べて無視し、圧力差 $\rho g(z_A-z_B)$ を動圧に等置すると

$$
\boxed{v=\sqrt{2g(z_A-z_B)}}.
$$

#### 3)

$S_A\dot z_A=-\sigma v$、$S_B\dot z_B=\sigma v$ より

$$
\dot h=-\sigma\left(\frac1{S_A}+\frac1{S_B}\right)\sqrt{2gh}.
$$

$h>0$ の間、変数分離して

$$
\boxed{h(t)=\left[\sqrt{h_A-h_B}-\frac{\sigma(S_A+S_B)}{S_AS_B}\sqrt{\frac g2}\,t\right]^2},
\quad0\le t\le t_*.
$$

ここで

$$
t_* =\frac{S_AS_B}{\sigma(S_A+S_B)}\sqrt{\frac{2(h_A-h_B)}g}.
$$

この準定常モデルでは $t\ge t_*$ で $h=0$ である。二乗式を $t_*$ より先まで延長してはならない。

### (2)

#### 1)

微小要素の $x$ 方向の力のつり合いより

$$
\boxed{\frac{d\tau}{dy}+\rho g\sin\theta=0}.
$$

#### 2)

$\tau=\mu v'$、$\tau(h)=0$、$v(0)=0$ を用いて二回積分する。

$$
\tau=\rho g\sin\theta(h-y),\qquad
v=\frac{\rho g\sin\theta}{\mu}\left(hy-\frac{y^2}{2}\right).
$$

従って

$$
V=\frac{\rho g\sin\theta}{2\mu}h^2,\qquad
\boxed{v=V\frac yh\left(2-\frac yh\right)}.
$$

#### 3)

$$
\boxed{Q=\int_0^h v\,dy=\frac23Vh=\frac{\rho g\sin\theta}{3\mu}h^3},
$$

$$
\boxed{h=\left(\frac{3\mu Q}{\rho g\sin\theta}\right)^{1/3}\propto Q^{1/3}}.
$$

## **Reference**

- [名古屋大学公式問題：2017年8月23日実施・専門部門、PDF 3ページ](https://www.mae.nagoya-u.ac.jp/application/files/1515/2475/5975/H29_.pdf)
