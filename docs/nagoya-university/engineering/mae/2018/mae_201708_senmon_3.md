---
sidebar_label: "2018年度 専門部門 問題3（機械力学）"
tags:
  - Nagoya-University
  - Physics.Mechanics.Forced-Vibration
  - Physics.Mechanics.Normal-Modes-and-Coupled-Oscillators
  - Physics.Mechanics.Beats-in-Coupled-Oscillators
---

# 名古屋大学 工学研究科 機械航空系 2018年度 専門部門 問題3

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

### (1)

摩擦のない水平面上の質量 $m$ の台車に、左側から並列のばね $k_1$・ダンパ $c_1$、右側から直列のばね $k_2$・ダンパ $c_2$ を接続する。左端への入力変位を $u_1$、台車変位を $y_1$、右側ばねとダンパの質量のない接続点の変位を $y_2$ とし、右端は固定する。右向きを正とし、ばね・ダンパの質量を無視する。

1. $u_1=y_2=0$ のときの運動方程式を求めよ。
2. 上の場合の特性根、減衰固有角振動数、減衰比を求めよ。ただし減衰比は 1 未満。
3. $u_1,y_2$ を拘束しない場合の運動方程式を求めよ。
4. $u_1=A\sin\omega t$（$A,\omega>0$）を与えたときの $y_1$ の定常振幅を求めよ。

### (2)

鉛直ばねに吊った質量 $m$、鉛直軸まわりの慣性モーメント $I$ の剛体が、伸び方向変位 $y$ とねじれ角 $\theta$ の連成振動をする。

$$
m\ddot y+k_y y+k_d\theta=0,\qquad
I\ddot\theta+k_d y+k_\theta\theta=0.
$$

$k_y,k_\theta,k_d$ は定数で、$k_d^2<k_yk_\theta$、$\sqrt{k_y/m}=\sqrt{k_\theta/I}=\omega_n$ とする。

1. 固有角振動数を定める特性方程式を求めよ。
2. 二つの固有角振動数を求めよ。
3. うなりの周期を求めよ。
4. $k_d^2\ll k_yk_\theta$ の場合、うなり周期と $2\pi/\omega_n$ の大小を論ぜよ。

![ばね・ダンパ系と伸び・ねじれ連成系](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/nagoya-university/engineering/mae/2018/nagoya2017_specialist3.svg)

#### 题目描述

（1）质量 $m$ 的台车在无摩擦水平面运动。左侧通过并联弹簧 $k_1$ 和阻尼器 $c_1$ 连接输入端 $u_1$；右侧通过弹簧 $k_2$、阻尼器 $c_2$ 串联连接固定壁，二者连接点无质量，位移为 $y_2$。台车位移为 $y_1$，各位移向右为正。求 $u_1=y_2=0$ 时的运动方程、欠阻尼特征根和频率及阻尼比；再求不限制输入与连接点位移时的运动方程，以及输入 $u_1=A\sin\omega t$ 时台车稳态振幅。（2）质量 $m$、转动惯量 $I$ 的悬挂刚体满足上列伸缩和扭转耦合方程，且 $k_d^2<k_yk_\theta$、$\sqrt{k_y/m}=\sqrt{k_\theta/I}=\omega_n$。求特征方程、两个固有角频率和拍周期，并在弱耦合时与 $2\pi/\omega_n$ 比较。

## **Kai**

### (1)

#### 1), 2)

$$
\boxed{m\ddot y_1+c_1\dot y_1+(k_1+k_2)y_1=0}.
$$

特性根と振動諸量は

$$
\boxed{s=-\frac{c_1}{2m}\pm i\frac{\sqrt{4m(k_1+k_2)-c_1^2}}{2m}},
$$

$$
\boxed{\omega_d=\sqrt{\frac{k_1+k_2}{m}-\frac{c_1^2}{4m^2}}},\qquad
\boxed{\zeta=\frac{c_1}{2\sqrt{m(k_1+k_2)}}}.
$$

#### 3)

台車および質量のない接続点の力のつり合いから

$$
\boxed{m\ddot y_1+c_1\dot y_1+(k_1+k_2)y_1-k_2y_2=k_1u_1+c_1\dot u_1},
$$

$$
\boxed{c_2\dot y_2+k_2y_2=k_2y_1}.
$$

#### 4)

$s=i\omega$ として後式から $Y_2=k_2Y_1/(k_2+c_2s)$ を消去すると

$$
\frac{Y_1}{U_1}=
\frac{(k_1+c_1s)(k_2+c_2s)}{(ms^2+c_1s+k_1+k_2)(k_2+c_2s)-k_2^2}.
$$

従って定常振幅は

$$
\boxed{
A\frac{\sqrt{(k_1^2+\omega^2c_1^2)(k_2^2+\omega^2c_2^2)}}{
\sqrt{\{k_2(k_1-m\omega^2)-\omega^2c_1c_2\}^2+
\omega^2\{c_2(k_1+k_2-m\omega^2)+c_1k_2\}^2}}
}.
$$

### (2)

#### 1), 2)

調和解を代入した係数行列の行列式をゼロにして

$$
\boxed{(k_y-m\omega^2)(k_\theta-I\omega^2)-k_d^2=0}.
$$

$\delta=|k_d|/\sqrt{mI}$ とおくと、大小順に

$$
\boxed{\omega_-=\sqrt{\omega_n^2-\delta},\qquad
\omega_+=\sqrt{\omega_n^2+\delta}}.
$$

$k_d^2<k_yk_\theta$ によりいずれも実数である。$k_d$ の符号はモードの位相関係を変えるが、固有振動数の集合は変えない。

#### 3)

両モードが励起される場合のうなり周期は

$$
\boxed{T=\frac{2\pi}{\omega_+-\omega_-}}
\qquad(k_d\ne0).
$$

例えば $\cos\omega_-t+\cos\omega_+t=2\cos[(\omega_+-\omega_-)t/2]\cos[(\omega_++\omega_-)t/2]$ であり、振幅の絶対値が繰り返す周期が上式である。$k_d=0$ では両周波数が一致し、有限周期のうなりは生じない。

#### 4)

弱い連成では $\omega_+-\omega_-\simeq\delta/\omega_n$ なので

$$
\boxed{T\simeq\frac{2\pi\omega_n\sqrt{mI}}{|k_d|}},\qquad
\boxed{\frac{T}{2\pi/\omega_n}\simeq\frac{\sqrt{k_yk_\theta}}{|k_d|}\gg1}.
$$

## **Reference**

- [名古屋大学公式問題：2017年8月23日実施・専門部門、PDF 4ページ](https://www.mae.nagoya-u.ac.jp/application/files/1515/2475/5975/H29_.pdf)
