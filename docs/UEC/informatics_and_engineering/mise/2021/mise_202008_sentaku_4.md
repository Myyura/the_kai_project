---
sidebar_label: "2020年8月実施 選択問題4 流体力学"
tags:
  - University-of-Electro-Communications
  - Engineering.Fluid-Mechanics.Viscosity-and-Reynolds-Number
  - Engineering.Fluid-Mechanics.Vorticity-and-Streamfunction
  - Engineering.Fluid-Mechanics.Hagen-Poiseuille-Flow
---

# 電気通信大学 情報理工学研究科 機械知能システム学専攻 2020年8月実施 選択問題4 流体力学

## **Author**

祭音Myyura (co-authored with GPT 6 Astra)

## **Description**

以下の問1，2，3に解答せよ。

### 問1

(1) 空欄①〜⑧を埋めよ。

- ニュートン流体とは，せん断応力と速度勾配が粘性係数 $\mu$ を介して【①】関係にある。この $\mu$ の単位は【②】で表される。
- レイノルズ数は【③】力と【④】力の比を表す無次元数である。幾何学的に同じ流れにおいてレイノルズ数が同じであれば，流れは【⑤】となる。
- 一定の圧力勾配で駆動された完全発達した，直円管内層流の速度分布は【⑥】分布である。円管直径を $D$，速度 $U$，流体の密度 $\rho$ および粘性係数 $\mu$ を用いて，レイノルズ数は $\mathrm{Re}=$【⑦】で定義される。壁面せん断応力を $\tau_w$ とすれば壁面摩擦係数は $C_f=$【⑧】で定義される。

(2) 流線，流脈線，流跡線の定義を，それぞれ50文字程度で説明せよ。

(3) 流体記述におけるラグランジュの方法およびオイラーの方法を，それぞれ50文字程度で説明せよ。

### 問2

2次元デカルト座標系において，$x$ および $y$ 方向の速度成分 $u,v$ が $u=x^2-y^2,v=-2xy$ で表される。

(1) 非圧縮流であることを証明せよ。

(2) $x$ 方向および $y$ 方向の加速度を答えよ。

(3) 渦度を答えよ。

### 問3

軸を共通とする二重円筒間の流れ（図1）を考える。外側円筒の半径を $a$，内側円筒の半径を $a/e$ とし，どちらの円筒も静止している。ここに $a$ は正の定数，$e$ はネイピア数（$e=2.71\ldots$）とする。円筒間に満たされた流体は，一定の平均圧力勾配 $-\partial P/\partial z=K$（$K$ は正の定数）で $z$ 方向に駆動されている。円筒は $z$ 方向に十分長いものとし，完全発達した定常非圧縮の層流とする。

![図1 同軸円筒間の流れ](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/UEC/informatics_and_engineering/mise/2021/mise_202008_sentaku_4_fig1.png)

(1) 円筒座標系における $z$ 方向速度の Navier–Stokes 方程式（下記）を，題意を踏まえ簡単にせよ。なお解答には $K$ を用いること。

$$
\begin{aligned}
\rho\biggl(&\frac{\partial u_z}{\partial t}
+\frac1r\frac{\partial}{\partial r}(ru_ru_z)
+\frac1r\frac{\partial}{\partial\theta}(u_\theta u_z)
+\frac{\partial}{\partial z}(u_zu_z)\biggr)\\
&=-\frac{\partial P}{\partial z}
+\mu\left(\frac1r\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right)
+\frac1{r^2}\frac{\partial^2u_z}{\partial\theta^2}
+\frac{\partial^2u_z}{\partial z^2}\right).
\end{aligned}
$$

(2) $z$ 方向速度 $u_z$ を求めよ。

#### 题目描述

回答下列第1题、第2题、第3题。

### 第1题

(1) 填写空白①〜⑧。

- 牛顿流体的剪切应力与速度梯度通过黏性系数 $\mu$ 构成【①】关系，$\mu$ 的单位为【②】。
- 雷诺数是表示【③】力与【④】力之比的无量纲数。对于几何形状相同的流动，如果雷诺数相同，则流动为【⑤】。
- 由恒定压力梯度驱动的充分发展直圆管层流，其速度分布为【⑥】分布。用圆管直径 $D$、速度 $U$、流体密度 $\rho$ 及黏性系数 $\mu$，雷诺数定义为 $\mathrm{Re}=$【⑦】。若壁面剪切应力为 $\tau_w$，则壁面摩擦系数定义为 $C_f=$【⑧】。

(2) 分别用约50个字说明流线、脉线、迹线的定义。

(3) 分别用约50个字说明描述流体运动的拉格朗日方法和欧拉方法。

### 第2题

在二维笛卡尔坐标系中，$x,y$ 方向的速度分量为 $u=x^2-y^2,v=-2xy$。

(1) 证明流动不可压缩。

(2) 给出 $x,y$ 方向的加速度。

(3) 给出涡量。

### 第3题

考虑图1所示同轴双圆筒之间的流动。外圆筒半径为 $a$，内圆筒半径为 $a/e$，两圆筒均静止。其中 $a$ 为正常数，$e$ 为自然对数的底（$e=2.71\ldots$）。两圆筒之间的流体受恒定平均压力梯度 $-\partial P/\partial z=K$（$K>0$）驱动，沿 $z$ 方向流动。假设圆筒沿 $z$ 方向足够长，流动为充分发展、定常、不可压缩层流。

(1) 根据题目条件，简化下列圆柱坐标系中 $z$ 方向速度的 Navier–Stokes 方程，答案中须使用 $K$。

$$
\begin{aligned}
\rho\biggl(&\frac{\partial u_z}{\partial t}
+\frac1r\frac{\partial}{\partial r}(ru_ru_z)
+\frac1r\frac{\partial}{\partial\theta}(u_\theta u_z)
+\frac{\partial}{\partial z}(u_zu_z)\biggr)\\
&=-\frac{\partial P}{\partial z}
+\mu\left(\frac1r\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right)
+\frac1{r^2}\frac{\partial^2u_z}{\partial\theta^2}
+\frac{\partial^2u_z}{\partial z^2}\right).
\end{aligned}
$$

(2) 求 $z$ 方向速度 $u_z$。

## **Kai**

### 問1

(1) 各空欄は

| 空欄 | 解答 |
| --- | --- |
| ① | 比例 |
| ② | $\mathrm{Pa\cdot s}=\mathrm{kg/(m\cdot s)}$ |
| ③ | 慣性 |
| ④ | 粘性 |
| ⑤ | 力学的に相似 |
| ⑥ | 放物線 |
| ⑦ | $\rho UD/\mu$ |
| ⑧ | $\tau_w/(\tfrac12\rho U^2)$ |

(2) 流線は、ある瞬間の各点で、その接線方向がその点の速度ベクトル方向と一致する曲線である。流脈線は、過去に空間の一定点を通過した流体粒子を、ある瞬間に連ねた曲線である。流跡線は、一つの流体粒子の位置を時間とともに追跡して得られる軌跡である。

(3) ラグランジュの方法では、個々の流体粒子を識別し、その位置や速度の時間変化を追う。オイラーの方法では、空間に固定した位置で、速度や圧力を位置と時間の関数として記述する。

### 問2

$$
\frac{\partial u}{\partial x}+\frac{\partial v}{\partial y}=2x-2x=0
$$

なので、非圧縮流の連続の式を満たす。定常流でも対流加速度は存在し、

$$
\boxed{a_x=u\frac{\partial u}{\partial x}+v\frac{\partial u}{\partial y}
=2x(x^2+y^2)},
$$

$$
\boxed{a_y=u\frac{\partial v}{\partial x}+v\frac{\partial v}{\partial y}
=2y(x^2+y^2)}.
$$

渦度は $\boxed{\omega_z=\partial v/\partial x-\partial u/\partial y=0}$ である。

### 問3

十分発達した軸対称な一方向流なので、$u_r=u_\theta=0,u_z=u_z(r)$。時間、角度、軸方向の速度微分が消え、

$$
\boxed{0=K+\frac\mu r\frac d{dr}\left(r\frac{du_z}{dr}\right)}.
$$

2回積分すると $u_z=-Kr^2/(4\mu)+C_1\ln r+C_2$。静止壁の無滑り条件 $u_z(a)=u_z(a/e)=0$ を使い、$\ln a-\ln(a/e)=1$ に注意すれば

$$
\boxed{\begin{gathered}
u_z(r)=\frac K{4\mu}\left[a^2-r^2+a^2(1-e^{-2})\ln\frac ra\right],\\
\frac ae\le r\le a
\end{gathered}}.
$$

両端の速度0と微分方程式を直接代入して確認できる。

## **Reference**

- [電気通信大学公式原題の公開アーカイブ：2020年8月18日実施、PDF 9ページ](https://web.archive.org/web/20241224115014id_/https://www.uec.ac.jp/education/graduate/admission/pdf/kako_m_choice202008.pdf)
