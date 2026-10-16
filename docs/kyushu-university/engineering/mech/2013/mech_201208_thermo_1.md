---
sidebar_label: "2012年8月実施 問1（熱工学）"
tags:
  - Kyushu-University
  - Physics.Thermodynamics.Ideal-Gas-Entropy-and-Heat-Capacities
  - Physics.Thermodynamics.Enthalpy-and-Thermodynamic-Relations
---

# 九州大学 工学府 機械系専攻 2012年8月実施 熱工学 問1

## **Author**

祭音Myyura (refined with GPT 6 Astra)

## **Description**

図のように、シリンダとピストンで囲まれたA室に比熱比 $\kappa$ の理想気体が密閉されている。ピストン断面積は $S$、摩擦と気体の漏れはない。ピストンはばね定数 $k$ のばねでA室と反対側の壁につながれ、反対側は大気に開放されている。シリンダとピストンはともに断熱され、A室内にヒータがある。ピストン左端の位置を $x$ とし、シリンダ左壁の内側を原点とする。（60点）

状態0ではばねが自然長、A室の圧力・温度は $p_0,T_0$、位置は $x_0$ である。ヒータで加熱し、ピストンがゆっくり動いて $x=x_1$ となったところで加熱を止め、この状態1の圧力・温度を $p_1,T_1$ とする。$p_0,T_0,S,k,x_0,x_1,\kappa$ は既知、A室内の変化は準静的、$\kappa$ は温度に依存しないとする。

![公式原図](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomon/kyushu-university/engineering/mech/2013/mech_201208_thermo-1-original.png)

1. $p_1,T_1$ を求めよ。
2. 状態0から1の間に与えた熱量 $Q_{01}$ を求めよ。
3. 状態1から左壁に小穴を開けると、気体がゆっくり漏れてピストンが動き、やがて停止した。この状態2でA室に残った気体の質量割合を求めよ。
4. 状態2で穴を塞ぎ、再び $x=x_1$ となるまで緩やかに加熱して状態3とした。この間の熱量 $Q_{23}$ を求めよ。

#### 题目描述

绝热活塞气缸中的理想气体推动弹簧，先加热至指定活塞位置，再缓慢泄气至活塞停止，最后封孔重新加热至同一位置。求第一次终态、加热量、剩余质量比例及第二次加热量。泄气阶段必须使用含流出焓的开口系统能量守恒。

## **Kai**

$\Delta x=x_1-x_0>0$、初始気体質量を $m_0$、比気体定数を $R$ とする。状態0でばね力が零なので大気圧は $p_0$ である。準静的な力の釣り合いより、全過程の圧力と体積は

$$
p(x)=p_0+\frac{k}{S}(x-x_0),\qquad V=Sx.
$$

### (1)

$$
\boxed{p_1=p_0+\frac{k\Delta x}{S}}.
$$

状態0から1では質量が一定で、$m_0RT_0=p_0Sx_0$。したがって

$$
\boxed{T_1=T_0\frac{p_1x_1}{p_0x_0}}.
$$

### (2)

気体がする境界仕事は

$$
W_{01}=\int_{x_0}^{x_1}p(x)S\,dx
=p_0S\Delta x+\frac{k}{2}(\Delta x)^2.
$$

比熱一定の理想気体では $U=pV/(\kappa-1)$ なので

$$
\boxed{Q_{01}=\frac{p_1Sx_1-p_0Sx_0}{\kappa-1}
+p_0S\Delta x+\frac{k}{2}(\Delta x)^2}.
$$

既知量だけで書けば

$$
\boxed{Q_{01}=\frac{\kappa p_0S}{\kappa-1}\Delta x
+\frac{kx_1}{\kappa-1}\Delta x+\frac{k}{2}(\Delta x)^2}.
$$

### (3)

流出が止まると $p_2=p_0$ であり、力の釣り合いから $x_2=x_0$。漏出中は質量 $m$ が減少する開放系で、ヒータ停止・断熱である。流出気体が持ち去るエンタルピーを含めると、$dm<0$ として

$$
d(mc_vT)=-p\,dV+c_pT\,dm.
$$

これを展開して $pV=mRT$ を用いると

$$
mc_v\,dT=-p\,dV+RT\,dm,
\qquad \frac{dp}{p}+\kappa\frac{dV}{V}=\kappa\frac{dm}{m}.
$$

積分により $m/m_0=(p/p_1)^{1/\kappa}(V/V_1)$。よって求める残留質量割合は

$$
\boxed{\frac{m_2}{m_0}=\frac{x_0}{x_1}
\left(\frac{p_0}{p_1}\right)^{1/\kappa}
=\frac{x_0}{x_1}\left(\frac{p_0}{p_0+k\Delta x/S}\right)^{1/\kappa}}.
$$

また、$T_2/T_1=(p_0/p_1)^{(\kappa-1)/\kappa}$ であり、漏出を等温過程と置くことはできない。

### (4)

状態2では $(p,V)=(p_0,Sx_0)$、状態3では $(p,V)=(p_1,Sx_1)$。質量は状態0・1と異なるが、内部エネルギー $U=pV/(\kappa-1)$ の両端値はそれぞれ等しい。また圧力–体積の経路も同じなので $W_{23}=W_{01}$。従って

$$
\boxed{Q_{23}=Q_{01}
=\frac{\kappa p_0S}{\kappa-1}\Delta x
+\frac{kx_1}{\kappa-1}\Delta x+\frac{k}{2}(\Delta x)^2}.
$$
