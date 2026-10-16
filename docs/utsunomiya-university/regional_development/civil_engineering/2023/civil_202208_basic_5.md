---
sidebar_label: "2023年度 第1期 土木工学基礎 問5"
tags:
  - Utsunomiya-University
  - Physics.Mechanics
---

# 宇都宮大学 地域創生科学研究科 社会デザイン科学専攻 土木工学プログラム 2023年度 第1期 土木工学基礎 問5

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%AE%87%E9%83%BD%E5%AE%AE%E5%A4%A7%E5%AD%A6/%E5%9C%B0%E5%9F%9F%E5%89%B5%E7%94%9F%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%A4%BE%E4%BC%9A%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6/2022%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6%E5%9F%BA%E7%A4%8E.html) refined with GPT 6 Astra)

## **Description**

空気抵抗を無視し、質量 $m$ の質点には重力だけが働くとする。鉛直下向きに $x$ 軸を取り、$t=0$ の初速度を $v_0$ とする。運動方程式を示し、時間 $t$ 後の落下速度 $v$ と移動距離 $x$ を求めよ。重力加速度を $g$ とする。

#### 题目描述

忽略空气阻力，质量 $m$ 的质点只受重力。以竖直向下为 $x$ 轴正方向，$t=0$ 时初速度为 $v_0$。写出运动方程，求时间 $t$ 后的速度 $v$ 和移动距离 $x$，重力加速度为 $g$。

## **Kai**

下向きを正に取ると

$$
\boxed{m\ddot x=mg}.
$$

初期条件 $v(0)=v_0$ を使って積分すると

$$
\boxed{v(t)=v_0+gt}.
$$

初期位置を原点 $x(0)=0$ とすれば、さらに積分して

$$
\boxed{x(t)=v_0t+\frac12gt^2}.
$$

これは下向きの変位であり、初めから下向きに落下する場合には移動距離に等しい。

## **Reference**

- [宇都宮大学公式問題（PDF 7頁）](https://admission.utsunomiya-u.ac.jp/docs/2023doboku.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%AE%87%E9%83%BD%E5%AE%AE%E5%A4%A7%E5%AD%A6/%E5%9C%B0%E5%9F%9F%E5%89%B5%E7%94%9F%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%A4%BE%E4%BC%9A%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6/2022%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6%E5%9F%BA%E7%A4%8E.html)
