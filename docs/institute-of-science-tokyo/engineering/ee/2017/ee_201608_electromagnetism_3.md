---
sidebar_label: "2016年8月実施 電磁気学3"
tags:
  - institute-of-science-tokyo
  - Physics.Electromagnetism.Biot-Savart-Law
  - Electrical-Electronic.Circuits.Mutual-Inductance
  - Physics.Electromagnetism.Electromagnetic-Induction-and-Inductance
---

# 東京工業大学 工学院 電気電子系 2016年8月実施 電磁気学3

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

以下の問に答えよ。ただし、透磁率は全領域で $\mu_0$ とする。

![円形電流、微小ループとの相互インダクタンスおよび移動実験（図3.1〜3.3）](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_em3-original.png)

1) 図3.1のように、半径 $a$ の円形ループ A に電流 $I$ を流した。ループの中心を原点とし、ループの面に垂直にとった $x$ 軸上の任意の点の磁界の大きさを求めよ。

2) 図3.2のように、$x$ 軸上で座標 $d$ の位置に、半径 $b$ の微小円形ループ B を、その中心を $x$ 軸上に、また、その面がループ A の面と平行になるように置いた。ループ A と B の間の相互インダクタンスを求めよ。ただし、$b\ll a$ とする。

3) 図3.3のように、2) で示した半径 $b$ の微小ループ B に一定の電流 $I$ を流しておき、$x$ 軸上で $-\infty$ から $+\infty$ まで一定の速度 $u$ で移動させる。また、半径 $a$ のループ A は固定し、図3.3のように電圧計を接続しておく。この電圧計の内部抵抗は高く、ループ A に流れる電流は無視できる。このとき、電圧計の表示する電圧を計算し、時間 $t$ の関数として、そのグラフの概略を図示せよ。（グラフ中に各点の値を示す必要はない。）ただし、$b\ll a$ とし、また、ループ B がループ A の中心を通過する瞬間を $t=0$ とする。

### 题目描述

回答以下问题。所有区域的磁导率均为 $\mu_0$。

1) 如图3.1，半径为 $a$ 的圆形线圈 A 通有电流 $I$。以线圈中心为原点、垂直于线圈平面的方向为 $x$ 轴，求 $x$ 轴上任意点的磁场强度大小。

2) 如图3.2，在 $x$ 轴上坐标为 $d$ 的位置放置半径为 $b$ 的微小圆形线圈 B，使其中心位于 $x$ 轴上、平面与线圈 A 平行。求线圈 A、B 间的互感，假设 $b\ll a$。

3) 如图3.3，让 2) 中半径为 $b$ 的微小线圈 B 通以恒定电流 $I$，沿 $x$ 轴以恒定速度 $u$ 从 $-\infty$ 移动到 $+\infty$。半径为 $a$ 的线圈 A 固定，并按图3.3连接电压表。电压表的内阻很大，线圈 A 中的电流可忽略。计算电压表的示值，并画出其作为时间 $t$ 的函数的概略图（不必标出图中各点的数值）。假设 $b\ll a$，并以线圈 B 穿过线圈 A 中心的瞬间为 $t=0$。

## **Kai**

### 1)

対称性から軸に垂直な磁界成分は打ち消し合う。ビオ・サバールの法則の軸方向成分を一周積分すると

$$
H(x)=\int_0^{2\pi}\frac{Ia^2}{4\pi(a^2+x^2)^{3/2}}\,d\theta
=\boxed{\frac{Ia^2}{2(a^2+x^2)^{3/2}}}.
$$

### 2)

B 内で A の磁界を一様とみなすと、B を貫く磁束は

$$
\Phi_B=\mu_0H(d)\pi b^2=MI.
$$

従って、両ループの正方向を同じ向きに取った相互インダクタンスは

$$
\boxed{M(d)=\frac{\mu_0\pi a^2b^2}{2(a^2+d^2)^{3/2}}}.
$$

### 3)

相反性より、B が A を貫く向きに作る磁束も $\Phi_A=IM(ut)$ である。A の導線を電圧計の $+$ 端から $-$ 端へたどる向きを正に取ると、図の B の電流と同じ周回方向になる。この向きの誘導起電力は $e=-d\Phi_A/dt$、開放端電圧は $V=-e$ なので

$$
\boxed{
V(t)=I\frac{dM(ut)}{dt}
=-\frac{3\mu_0\pi a^2b^2Iu^2t}
{2(a^2+u^2t^2)^{5/2}}
}.
$$

$V(t)$ は奇関数であり、$t<0$ で正、$t=0$ で $0$、$t>0$ で負となり、$t\to\pm\infty$ では $0$ に近づく。

![小ループ通過時の電圧計表示](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/institute-of-science-tokyo/engineering/ee/2017/ee_201608_em3-voltage.svg)
