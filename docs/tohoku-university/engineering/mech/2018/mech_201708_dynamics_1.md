---
sidebar_label: "2017年秋季 機械力学 第1問"
tags:
  - Tohoku-University
  - Physics.Mechanics.Rigid-Body-Moment-of-Inertia
  - Physics.Mechanics.Hamilton-Principle-and-Euler-Lagrange-Equation
---

# 東北大学 工学研究科 機械・知能系 2017年秋季 機械力学 第1問

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

2017年10月・2018年4月入学対象、2017年8月実施。

一様な剛体棒 AB、CD はともに質量 $m$、長さ $L$。ABはAから $L/3$ の点Eで、CDはDでピン支持され、BとCを質量のない鉛直剛体リンクで結ぶ。ABのAから $2L/3$ の位置と、CDの中点を、それぞればね定数 $k$ の鉛直ばねで天井から吊るす。静的つり合いでは両棒は水平で、その近傍で微小回転振動する。ABのEまわりの反時計回り角を $\theta(t)$ とする。ばねの質量と水平方向変形を無視する。

1. ABのEまわりの慣性モーメント $J_{AB}$ を求めよ。
2. CDの回転角 $\varphi(t)$ を $\theta(t)$ で表せ。
3. 運動エネルギーを求めよ。
4. ポテンシャルエネルギーを求めよ。
5. 運動方程式を導け。

![剛体リンクでつながれた二本の棒](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku-university/engineering/mech/2018/tohoku2017_dynamics1.svg)

#### 题目描述

本题为2017年8月实施、面向2017年10月及2018年4月入学的考试。

均匀刚杆AB、CD质量均为 $m$、长度均为 $L$。AB在距A为 $L/3$ 的E点铰支，CD在D点铰支；B、C之间由无质量竖直刚性连杆连接。在AB距A为 $2L/3$ 处和CD中点，各以刚度 $k$ 的竖直弹簧吊于天花板。平衡时两杆水平，并作微小转动；AB关于E的逆时针转角为 $\theta(t)$，忽略弹簧质量和横向变形。求AB关于E的转动惯量、CD转角与 $\theta$ 的关系、系统动能和势能，以及运动方程。

## **Kai**

### (1), (2)

EとABの重心との距離は $L/6$。平行軸の定理より

$$
\boxed{J_{AB}=\frac{mL^2}{12}+m\left(\frac L6\right)^2=\frac{mL^2}{9}}.
$$

CDの $\varphi$ はDまわり時計回りを正と定義する。リンクによりB、Cの鉛直変位が等しく、$2L\theta/3=L\varphi$。従って

$$
\boxed{\varphi=\frac23\theta}.
$$

両棒の角を反時計回りでそろえるなら $\varphi=-2\theta/3$ である。

### (3)

$J_{CD}=mL^2/3$ なので

$$
T=\frac12J_{AB}\dot\theta^2+\frac12J_{CD}\dot\varphi^2
=\boxed{\frac7{54}mL^2\dot\theta^2}.
$$

### (4)

ばね取付点の変位はそれぞれ $L\theta/3$ と $L\varphi/2=L\theta/3$。静的平衡まわりでは重力と初期ばね力に由来する一次項が相殺される。水平な棒の重心高さの変化には二次項がないため、微小振動の二次ポテンシャルは

$$
\boxed{U=\frac12k\left(\frac{L\theta}3\right)^2+
\frac12k\left(\frac{L\varphi}2\right)^2=\frac{kL^2}{9}\theta^2}.
$$

### (5)

ラグランジュ方程式から

$$
\frac7{27}mL^2\ddot\theta+\frac29kL^2\theta=0,
\qquad\boxed{7m\ddot\theta+6k\theta=0}.
$$

固有角振動数は $\omega_n=\sqrt{6k/(7m)}$ である。

## **Reference**

- [東北大学公式問題の保存版：2017年8月実施、PDF 17ページ](https://web.archive.org/web/20190923163142id_/https://www.mech.tohoku.ac.jp/wp/wp-content/themes/joints-mech/img/examination/pdf/Problem2017.pdf)
