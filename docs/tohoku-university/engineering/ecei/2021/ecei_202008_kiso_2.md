---
sidebar_label: "2020年8月実施 基礎科目 問題2 電気回路"
tags:
  - Tohoku-University
  - Electrical-Circuit
---
# 東北大学 工学研究科 電気・情報系 2020年8月実施 基礎科目 問題2 電気回路

## **Author**
[蛋黄猫物理 (xhs: 94162357270)](https://www.xiaohongshu.com/user/profile/67173192000000001e009fa7?xsec_token=YBaJbvO4qazzvNUB-8gkqSwFa4usRBcKTQe93j6tfxtPw=)

## **Description**
(1) Fig.2(a) に示す損失のある分布に定数線路(特性インピーダンス $Z_0$, 伝送定数 $\gamma$, 長さ $l$) が負荷インピーダンス $Z_r$ で終端されている際のインピーダンス $Z_{in}$ を求めよ。ただし、$\gamma$ は複素数である。また上記分布定数線路が無損失分布定数線路(位相定数 $\beta$) である場合、同様に負荷インピーダンス $Z_r$ で終端されている際のインピーダンス $Z_{in}$ を求めよ。

(2) Fig.2(b) に示すコンデンサ(静電容量 $C$)のインピーダンスと Fig.2(c) に示す終端開放の無損失分布定数線路(特性インピーダンス $Z_0$ ,位相定数 $\beta$) のインピーダンス $Z_{in}$ が等しいとして、線路長 $l_x$ を求めよ。ただし入力端子(0-0')に接続される正弦波交流電源の角周波数を $\omega$ とする。

(3) Fig.2(d) に示すように、$1$ 段の $1/4$ 波長無損失分布定数線路(特性インピーダンス $Z_{01}$ ,位相定数 $\beta$)を無損失分布定数線路(特性インピーダンス $Z_{0}$ ,位相定数 $\beta$, 長さ $l$)と負荷抵抗(実数 $R$)との間に挿入することによう接続点(1-1')におけるインピーダンスを整合したい。$Z_{01},Z_0,R$ の関係式お導け。

(4) Fig.2(e) に示すように、$2$ 段の $1/4$ 波長無損失線路(特性インピーダンス $Z_{02}，Z_{03}$ ,位相定数 $\beta$)を無損失分布定数線路(特性インピーダンス $Z_{0}$ ,位相定数 $\beta$, 長さ $l$)と負荷抵抗(実数 $R$)との間に挿入することによう接続点(2-2')におけるインピーダンスを整合したい。$Z_{02},Z_{03},Z_0,R$ の関係式を導け。また負荷抵抗 $R$ と特性インピーダンス $Z_0$ が大きく異なる場合に、$1/4$ 波長無損失線路の段数を増やすことによる効果をスミスチャート等を参考にして説明せよ。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202008_kiso_2_electrical_circuit_p1.png" width="550"/>
</figure>

## **Kai** 
### (1)
传输线上电压和电流的一般解可以写作：

$$
\begin{aligned}
V &= V_{+}e^{-\gamma x} + V_{-}e^{+\gamma x} \\
I &= \frac{V_+}{Z_0}e^{-\gamma x} - \frac{V_{-}}{Z_0}e^{+\gamma x} \\
Z_{in} &= \frac{V(0)}{I(0)} = Z_0\frac{V_+ + V_-}{V_+ - V_-} \\
\end{aligned}
$$

终端反射率决定了两个方向传播的波动的振幅之比：

$$
Z_r = \frac{V(l)}{I(l)} = \frac{V_+ e^{-\gamma l} + V_- e^{+\gamma l}}{\frac{V_+}{Z_0}e^{-\gamma l} - \frac{V_-}{Z_0} e^{+\gamma l}}
$$

有损的时候指数因子不但包含延迟还有衰减，不能随意消除：

$$
\frac{Z_r}{Z_0} = \frac{V_+ + V_- e^{2\gamma l}}{V_+ - V_- e^{2\gamma l}}
$$

$$
\bigg(\frac{Z_r}{Z_0} - 1\bigg)V_+ = \bigg(\frac{Z_r}{Z_0} + 1\bigg)V_- e^{2\gamma l}
$$

$$
r = \frac{V_-}{V_+} = \frac{\frac{Z_r}{Z_0} - 1}{\frac{Z_r}{Z_0} + 1} \cdot e^{-2\gamma l} = \frac{Z_r - Z_0}{Z_r + Z_0} \cdot e^{-2\gamma l}
$$

其中：

$$
\begin{aligned}
Z_{in} = Z_0\frac{V_+ + V_-}{V_+ - V_-} &= Z_0\frac{1 + r}{1 - r} = Z_0\frac{1 + \frac{Z_r - Z_0}{Z_r + Z_0} \cdot e^{-2\gamma l}}{1 - \frac{Z_r - Z_0}{Z_r + Z_0} \cdot e^{-2\gamma l}} \\
&= Z_0 \frac{(Z_r + Z_0)e^{\gamma l} + (Z_r - Z_0) \cdot e^{-\gamma l}}{(Z_r + Z_0)e^{\gamma l} - (Z_r - Z_0) \cdot e^{-\gamma l}} \\
&= Z_0 \cdot \frac{Z_r \cosh \gamma l + Z_0\sinh \gamma l}{Z_r \sinh \gamma l + Z_0\cosh \gamma l} \\
&= Z_0 \cdot \frac{Z_r + Z_0\tanh (\gamma l)}{Z_0 + Z_r \tanh (\gamma l)}
\end{aligned}
$$

无损的时候做以下的替换即可：

$$
\gamma = \alpha + j\beta,\alpha = 0
$$

$$
\tanh(j\beta) = \frac{e^{j\beta l - e^{-j\beta l}}}{e^{j\beta l + e^{-j\beta l}}} = j\tan \beta l
$$

$$
Z_{in} = Z_0 \cdot \frac{Z_r + j Z_0 \tan(\beta l)}{Z_0 + jZ_r\tan(\beta l)}
$$

### (2)

$$
Z_{in} = Z_0 \cdot \frac{Z_r + jZ_0 \tan(\beta l)}{Z_0 + jZ_r\tan(\beta l)} = Z_0 \cdot \frac{1}{j \tan(\beta l)} = \frac{1}{j\omega C}
$$

无损传输线的特性阻抗是一个实数：

$$
\frac{Z_0}{\tan\beta l} = \frac{1}{\omega C}
$$

$$
l = \frac{1}{\beta} \cdot \tan^{-}(\omega C Z_0)
$$

最小的可能长度由上式确定 $l_m$

由于周期性，

$$
\beta l_m + k\pi = \beta l_x
$$

$$
l_x = l_m + \frac{k\pi}{\beta}, k = 0,1,2,\dots
$$

这些长度的线都可以满足题设

### (3)
使得11'端口的输入阻抗为前一段的特性阻抗即可：

$$
Z_{in} = Z_{01} \cdot \frac{R + jZ_{01}\tan(\beta l)}{Z_{01} + jR\tan(\beta l)} = Z_0
$$

$$
\beta = \frac{2\pi}{\lambda}
$$

$$
\beta \cdot \frac{\lambda}{4} = \frac{\pi}{2}
$$

$$
Z_{in} = \frac{Z_{01}^2}{R} = Z_0
$$

### (4)
连续利用（3）的结论：

$$
R_2 = \frac{Z_{02}^2}{R}
$$

$$
Z_0 = \frac{Z_{03}^2}{R_2} = \frac{Z_{03}^2}{Z_{02}^2} \cdot R
$$

关于施密特图的说明，
横轴是反射率的实部，纵轴是反射率的虚部，由于无损传输线的特性阻抗是实数，我们只用考虑横轴上的点之间如何变换。其中传输线的作用是围绕两点的几何平均数 $(Z_{02} = \sqrt{RR_2})$ 旋转 $180$ 度（如果更进一步是逆时针）。多段和一段都能实现任意两点之间的变换，区别在于，多段围城曲线的总面积小于一段，我们可以看到面积越大代表反射越大，所以多段具有降低反射提高带宽的作用。

<figure style="text-align:center;">
  <img src="https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_202008_kiso_2_electrical_circuit_p2.png" width="400"/>
</figure>