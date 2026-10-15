---
sidebar_label: "2019年度 問4（材料力学）"
tags:
  - Kyushu-University
  - Engineering.Mechanics-of-Materials.Euler-Buckling
---

# 九州大学 工学府 機械系専攻 2019年度 材料力学 問4

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図に示す薄肉断面をもつ長柱がある。厚み $t$、ヤング率 $E$ の薄板を接合したもので、軸方向の長さは $l$ である。断面は幅 $a$ の縦板 AB と、長さ $a$ の水平板 AC、中央の板、BF からなる。水平板の間隔はそれぞれ $a/2$ とする。

長柱は上下端でそれぞれヒンジを介して剛体に取り付けられ、両端は軸方向のみに変位する。$x$ 軸まわりには両端が回転端、$y$ 軸まわりには両端が固定端となる。上側の剛体が下降し、軸圧縮荷重が作用する。各薄板が単独で座屈することはなく、$l\gg a\gg t$ とする。

![公式原題の構造図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/kyushu-mechanical/2019/material-4-original.png)

1. 断面の重心と薄板 AB との距離 $e$ を求めよ。
2. 重心を通る $x,y$ 軸に関する断面二次モーメント $I_x,I_y$ を求めよ。
3. 長柱の座屈荷重を求めよ。

#### 题目描述

长为 $l$ 的长柱由厚度 $t$、杨氏模量 $E$ 的薄板连接而成，截面呈图示 E 形：一块长 $a$ 的竖板与三块长 $a$ 的水平板连接，水平板间距均为 $a/2$。柱两端只能沿轴向移动；绕 $x$ 轴为两端铰支，绕 $y$ 轴为两端固支。上端受轴向压力，各薄板不发生局部屈曲，且 $l\gg a\gg t$。求截面重心距竖板 AB 的距离 $e$、重心轴截面二次矩 $I_x,I_y$ 及整体屈曲荷载。

## **Kai**

薄肉近似を用い、板厚に由来する高次の項を無視する。

### (1)

AB の中心線を水平位置の原点とすると、縦板の面積は $at$、重心位置は $0$。3 枚の水平板は各面積 $at$、重心位置は $a/2$ である。断面一次モーメントから

$$
\boxed{e=\frac{3(at)(a/2)}{at+3at}=\frac{3a}{8}}.
$$

### (2)

上下対称なので重心は中央の水平板上にある。$x$ 軸については縦板の寄与と上下の水平板の寄与を加えて

$$
\boxed{I_x=\frac{ta^3}{12}+2at\left(\frac a2\right)^2
=\frac{7a^3t}{12}}.
$$

$y$ 軸については平行軸の定理より

$$
I_y=at\left(\frac{3a}{8}\right)^2
+3\left[\frac{ta^3}{12}+at\left(\frac a2-\frac{3a}{8}\right)^2\right].
$$

したがって

$$
\boxed{I_y=\frac{7a^3t}{16}}.
$$

### (3)

$x$ 軸まわりの曲げ座屈は両端回転端で、有効長さは $l$。$y$ 軸まわりは両端固定端で、有効長さは $l/2$ である。それぞれの Euler 荷重は

$$
P_{\mathrm{cr},x}=\frac{\pi^2EI_x}{l^2}
=\frac{7\pi^2Ea^3t}{12l^2},
$$

$$
P_{\mathrm{cr},y}=\frac{\pi^2EI_y}{(l/2)^2}
=\frac{7\pi^2Ea^3t}{4l^2}.
$$

小さい方が限界荷重なので、$x$ 軸まわりに曲がる（$y$ 方向へたわむ）座屈が先に起こり、

$$
\boxed{P_{\mathrm{cr}}=\frac{7\pi^2Ea^3t}{12l^2}}.
$$
