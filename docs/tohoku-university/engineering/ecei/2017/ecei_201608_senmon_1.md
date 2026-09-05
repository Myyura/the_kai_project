---
sidebar_label: 2016年8月実施 専門科目 問題1 電気工学（周波数応答・制御）
tags:
  - Tohoku-University
  - Electrical-Electronic.Control-Theory.Nyquist-Stability-Criterion
  - Electrical-Electronic.Control-Theory.Routh-Hurwitz-Stability
---

# 東北大学 工学研究科 電気・情報系 2016年8月実施 専門科目 問題1 電気工学（周波数応答・制御）

## **Author**

祭音Myyura (co-authored with GPT 5.6 SOL)

## **Description**

### 日本語版

(2) ある電気回路の伝達関数が
$$
G(s)=\frac1{(s+1)(s+2)}
$$
で与えられる。次の問に答えよ。

- (a) 周波数伝達関数 $G(j\omega)$ のゲイン $|G(j\omega)|$ と位相 $\angle G(j\omega)$ を求めよ。
- (b) 周波数伝達関数 $G(j\omega)$ のナイキスト線図の概形を描け。

(3) Fig. 1(b) に示すフィードバック制御系を考える。$r(t)$ と $y(t)$ は，それぞれ目標値と制御量である。次の問に答えよ。

- (a) このフィードバック制御系の開ループ伝達関数 $G(s)$ を求めよ。
- (b) このフィードバック制御系が安定になるための $K$ の範囲を求めよ。

#### 題意の要約

(1) 入力 $v_1$ から直列コイル $L$ を経て節点 $u$ に接続する。$u$ から抵抗 $R_1$ を接地に、抵抗 $R_2$ を出力 $v_2$ に接続し、出力端の容量 $C$ を接地する。(a) $G(s)=V_2/V_1$ を求める。(b) $R_1=1\,\Omega,R_2=3\,\Omega,C=0.5\,\mathrm F,L=0.5\,\mathrm H$ の単位ステップ応答を求め、主な特徴を図示する。図と原文は[大学公開の原題、1–2 ページ](https://www.ecei.tohoku.ac.jp/ecei_web/files/admission/201608senmon.pdf#page=1)を参照。

### 题目描述

2. 给定传递函数 $G(s)=1/[(s+1)(s+2)]$：(a) 求 $G(i\omega)$ 的增益与相位；(b) 画奈奎斯特曲线。
3. 单位负反馈系统的前向通路依次为 $K/(s+1)$ 和 $1/(s+2)$：(a) 求开环传递函数；(b) 求闭环稳定的 $K$ 范围。

```mermaid
flowchart LR
    r[r] --> e(("＋ / −")) --> c["K/(s+1)"] --> p["1/(s+2)"] --> y[y]
    y -->|单位负反馈| e
```

## **Kai**

### (1)

**(a)** 电容电流为 $sCV_2$，节点电压为 $U=(1+sCR_2)V_2$。电感电流为 $U/R_1+sCV_2$，故

$$
V_1=U+sL(U/R_1+sCV_2),
$$

从而

$$
\boxed{G(s)=\frac{R_1}{LCR_2s^2+[L+CR_1R_2]s+R_1}}.
$$

**(b)** 代入参数得 $G(s)=4/[(s+2)(3s+2)]$。零初值的单位阶跃响应为

$$
\boxed{v_2(t)=1+\frac12e^{-2t}-\frac32e^{-2t/3}\quad(t\ge0)}.
$$

它从 $0$ 以零斜率出发，导数 $v_2'=e^{-2t/3}-e^{-2t}>0$，因此单调上升至 $1$、无超调。拐点在 $t=3\ln3/4$。

![单位阶跃响应](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei/2017/ecei_201608_step.svg)


### (2)

$$
\boxed{|G(i\omega)|=\frac1{\sqrt{(1+\omega^2)(4+\omega^2)}},\qquad
\arg G(i\omega)=-\arctan\omega-\arctan\frac\omega2\quad(\omega\ge0).}
$$

其实部、虚部为

$$
\Re G=\frac{2-\omega^2}{(1+\omega^2)(4+\omega^2)},\qquad
\Im G=-\frac{3\omega}{(1+\omega^2)(4+\omega^2)}.
$$

正频率支从 $(1/2,0)$ 出发进入下半平面，在 $\omega=\sqrt2$ 处经过 $(0,-1/(3\sqrt2))$，再从第三象限趋于原点。负频率支关于实轴对称。

![奈奎斯特曲线](https://raw.githubusercontent.com/Myyura/the_kai_project_assets/main/kakomonn/tohoku_university/engineering/ecei_201608_senmon_1_nyquist.svg)

### (3)

$$
\boxed{G_{open}(s)=\frac K{(s+1)(s+2)}.}
$$

闭环特征多项式为 $s^2+3s+(2+K)$，二阶 Hurwitz 条件给出

$$
\boxed{K>-2.}
$$

若将 $K$ 限定为正增益，则所有 $K>0$ 均稳定。
