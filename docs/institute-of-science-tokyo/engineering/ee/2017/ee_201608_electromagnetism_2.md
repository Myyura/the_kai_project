---
sidebar_label: "2016年8月実施 電磁気学2"
tags:
  - institute-of-science-tokyo
  - Physics.Electromagnetism.Method-of-Images
  - Physics.Electromagnetism.Surface-Current-Boundary-Condition
  - Physics.Electromagnetism.Ampere-Law
  - Physics.Electromagnetism.Magnetic-Force
---

# 東京工業大学 工学院 電気電子系 2016年8月実施 電磁気学2

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図2.1に示す、無限に広い平面を表面とする透磁率 $\mu$ の磁性体と、その表面から距離 $a$ 離れた真空中の無限長直線導線を考える。導線には直流電流 $I$ が図の向きに流れている。導線の抵抗と径は無視し、真空の透磁率を $\mu_0$ とする。

![磁性体に隣接する直線電流と影像電流（図2.1〜2.3）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_em2-original.png)

図：東京工業大学 電気電子系 2016年実施問題、図2.1〜2.3（原図）。

1. 真電荷や電流のない異種材料の界面で、磁界と磁束密度の境界条件を答えよ。
2. 電磁気学の基本法則から、1) の二つの境界条件をそれぞれ導出せよ。
3. 真空側の磁界は、全空間を真空とした場合の実電流 $I$ と、界面に関して対称な影像電流 $I'$ の磁界の和に等しい。図2.2の界面上の点 P での成分 $H_{1x},H_{1y}$ を $I,I'$ で表せ。
4. 磁性体側の磁界は、全空間を磁性体とした場合に実電流の位置に置いた影像電流 $I''$ の磁界に等しい。図2.3の点 P での成分 $H_{2x},H_{2y}$ を $I''$ で表せ。
5. 境界条件を用いて $I',I''$ を $I$ で表せ。
6. 導線に働く単位長さ当たりの力を表せ。

#### 题目描述

无限长直导线平行于磁性半空间的平面边界，位于真空中，与界面相距 $a$，电流 $I$ 垂直纸面向内。磁性体和真空的磁导率分别为 $\mu,\mu_0$，忽略导线半径和电阻。1)、2) 写出并推导无界面电流时的磁场边界条件；3) 用真空中的实电流及镜像电流 $I'$ 写出界面 P 点的 $H_x,H_y$；4) 用磁性体中的等效电流 $I''$ 写出对应分量；5) 求两等效电流；6) 求导线单位长度所受的力。几何与方向见原图。

## **Kai**

### 1)

表面電流がないので磁界の接線成分は連続し、磁束密度の法線成分も連続する。

$$
\boxed{H_{1x}=H_{2x},\qquad \mu_0H_{1y}=\mu H_{2y}}.
$$

### 2)

界面をまたぐ薄い長方形にアンペールの法則を適用し、その高さを $0$ に近づけると

$$
\oint\boldsymbol H\cdot d\boldsymbol l=0
\quad\Longrightarrow\quad (H_{1x}-H_{2x})\Delta l=0.
$$

同様に薄い円柱に磁束保存則を適用すると

$$
\oint\boldsymbol B\cdot d\boldsymbol S=0
\quad\Longrightarrow\quad (B_{1y}-B_{2y})\Delta S=0.
$$

### 3)

$I'$ の正方向を図の紙面奥向きとする。直線電流の磁界 $H=I/(2\pi r)$ を分解して

$$
\boxed{H_{1x}=\frac{I'-I}{2\pi r}\cos\theta,
\qquad H_{1y}=-\frac{I+I'}{2\pi r}\sin\theta}.
$$

### 4)

同じ正方向を用いると

$$
\boxed{H_{2x}=-\frac{I''}{2\pi r}\cos\theta,
\qquad H_{2y}=-\frac{I''}{2\pi r}\sin\theta}.
$$

### 5)

境界条件は

$$
I-I'=I'',\qquad \mu_0(I+I')=\mu I''.
$$

これを解いて

$$
\boxed{I'=\frac{\mu-\mu_0}{\mu+\mu_0}I,
\qquad I''=\frac{2\mu_0}{\mu+\mu_0}I}.
$$

### 6)

実電流の位置で影像電流が作る磁束密度は $B_x=\mu_0I'/(4\pi a)$。実電流は $-z$ 方向なので、単位長さ当たりの力は

$$
\boxed{\boldsymbol f=-\frac{\mu_0I^2}{4\pi a}
\frac{\mu-\mu_0}{\mu+\mu_0}\,\boldsymbol e_y}.
$$

$\mu>\mu_0$ なら磁性体に引き寄せられ、$\mu<\mu_0$ なら反発し、$\mu=\mu_0$ なら力は $0$ である。
