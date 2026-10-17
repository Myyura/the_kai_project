---
sidebar_label: "2022年8月実施 第1期 土木工学基礎 問4"
tags:
  - Utsunomiya-University
  - Physics.Mechanics
---

# 宇都宮大学 地域創生科学研究科 社会デザイン科学専攻 土木工学プログラム 2022年8月実施 第1期 土木工学基礎 問4

## **Author**

祭音Myyura (Based on [Miyake's answer](https://miyake.github.io/exams/%E5%AE%87%E9%83%BD%E5%AE%AE%E5%A4%A7%E5%AD%A6/%E5%9C%B0%E5%9F%9F%E5%89%B5%E7%94%9F%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%A4%BE%E4%BC%9A%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6/2022%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6%E5%9F%BA%E7%A4%8E.html) refined with GPT 6 Astra)

## **Description**

自然長 $L$，バネ定数 $k$ のバネに質量 $m$ の物体をつるすとバネはある長さだけ伸びて静止する（つり合いの位置）。その後，その位置からこの物体をさらに少しだけ下に引き，静かに物体を放すと，つり合いの位置のまわりに上下の微小振動が生じる。その際の物体の運動方程式を求め，その一般解より角振動数 $\omega$ と周期 $T$ を求めよ。

なお，バネの重量は無視し，重力加速度は $g$ とする。

#### 题目描述

在自然长度为 $L$、弹簧常数为 $k$ 的弹簧上悬挂质量为 $m$ 的物体，弹簧伸长一定长度后静止，此处为平衡位置。随后将物体从该位置向下稍微拉动，再静止释放，物体便在平衡位置附近作上下微小振动。求此时物体的运动方程，并由其通解求角频率 $\omega$ 和周期 $T$。

忽略弹簧的重量，重力加速度为 $g$。

## **Kai**

つり合いでの伸びを $d$ とすると $kd=mg$。つり合い位置を原点、下向きを正として変位を $x$ とすれば

$$
\begin{gathered}
m\ddot x=mg-k(d+x)=-kx,\\
\boxed{m\ddot x+kx=0}.
\end{gathered}
$$

一般解は

$$
x(t)=A\cos\left(\sqrt{\frac km}\,t\right)
+B\sin\left(\sqrt{\frac km}\,t\right).
$$

したがって

$$
\boxed{\omega=\sqrt{\frac km}},\qquad
\boxed{T=2\pi\sqrt{\frac mk}}.
$$

初期変位を $x_0$、初速度を $0$ とすれば $A=x_0,\ B=0$ となる。

## **Reference**

- [宇都宮大学公式問題（PDF 6頁）](https://admission.utsunomiya-u.ac.jp/docs/2023doboku.pdf)
- [Miyake：参考解答](https://miyake.github.io/exams/%E5%AE%87%E9%83%BD%E5%AE%AE%E5%A4%A7%E5%AD%A6/%E5%9C%B0%E5%9F%9F%E5%89%B5%E7%94%9F%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6%E7%A7%91_%E7%A4%BE%E4%BC%9A%E3%83%87%E3%82%B6%E3%82%A4%E3%83%B3%E7%A7%91%E5%AD%A6%E5%B0%82%E6%94%BB_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6/2022%E5%B9%B48%E6%9C%88%E5%AE%9F%E6%96%BD_%E5%9C%9F%E6%9C%A8%E5%B7%A5%E5%AD%A6%E5%9F%BA%E7%A4%8E.html)
