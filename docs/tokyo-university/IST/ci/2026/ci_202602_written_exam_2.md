---
sidebar_label: '2026年2月実施 筆記試験 第2問'
tags:
  - Tokyo-University
  - Queueing-Theory
  - Probability-And-Statistics
---
# 東京大学 情報理工学系研究科 創造情報学専攻 2026年2月実施 筆記試験 第2問
## **Author**
[itsuitsuki](https://github.com/itsuitsuki)

## **Description (Memorized version, English)**
Consider a server that can only handle one request at a time.
- Requests arrive continuously at an arrival rate of $\lambda$.
- The service rate for processing a request is $\mu$.
- We define the probabilities for a very small time interval $\Delta t$ as follows:
  - The probability of a new arrival is $\lambda \Delta t$.
  - The probability of completing the current task (service completion) is $\mu \Delta t$.
  - The probability of more than one event occurring (e.g., two arrivals, or one arrival and one departure) in this interval is negligible ($o(\Delta t)$).

Let $P_n(t)$ be the probability that there are $n$ requests in the system (waiting + being served) at time $t$.
The boundary condition for an empty system is given by:
$$
P_0(t+\Delta t) = P_0(t)(1 - \lambda \Delta t) + P_1(t) \mu \Delta t
$$

Answer the following questions.

(1) For $n \ge 1$, derive the expression for $P_n(t+\Delta t)$ in terms of $P_{n-1}(t)$, $P_n(t)$, and $P_{n+1}(t)$.

(2) Assuming the system reaches a **Steady State** (where $P_n(t)$ does not change with time as $t \to \infty$), find the recurrence relation for $P_n$.

(3) Let the utilization rate be $\rho = \lambda / \mu$. Using the normalization condition $\sum_{n=0}^{\infty} P_n = 1$, find the explicit expression for $P_n$.

(4) Find the expected number of requests in the system, denoted as $L$. You can use the fact that $\sum_{n=0}^{\infty} n x^n = \frac{x}{(1-x)^2}$ for $0 < x < 1$.

(5) Using **Little's Law** ($L = \lambda W$, where $W$ is the average time a request spends in the system), find the expression for $W$.

(6) Analyze what happens to $W$ as $\rho$ approaches 1.

Suppose the total cost is given by $Cost = C_s + L \times C_d$, where $C_s$ is the fixed cost of the server and $C_d$ is the delay cost per request per unit of time.

(7) Given: $\mu=10$, $\lambda=8$, $C_s=10$, $C_d=5$. Calculate the total cost.

(8) An enhancement is proposed: $\mu$ can be increased to 12, but the fixed cost $C_s$ will increase to 15. Calculate the new total cost and determine if this change is **economically rational**.

## **Kai (by Gemini 3 Pro)**
### 1. Derivation of $P_n(t+\Delta t)$

To have $n$ requests at time $t+\Delta t$ (where $n \ge 1$), one of three mutually exclusive events must have occurred during the interval $\Delta t$:
1.  **No change**: There were $n$ requests at time $t$, and no new arrivals or departures occurred.
    Probability: $P_n(t) \cdot (1 - \lambda \Delta t - \mu \Delta t)$
2.  **One Arrival**: There were $n-1$ requests at time $t$, and one new request arrived.
    Probability: $P_{n-1}(t) \cdot (\lambda \Delta t)$
3.  **One Departure**: There were $n+1$ requests at time $t$, and one request was served.
    Probability: $P_{n+1}(t) \cdot (\mu \Delta t)$

Combining these gives:
$$P_n(t+\Delta t) = P_n(t)(1 - \lambda \Delta t - \mu \Delta t) + P_{n-1}(t)\lambda \Delta t + P_{n+1}(t)\mu \Delta t$$

### 2. Recurrence Relation

Rearrange the equation from Q1 and divide by $\Delta t$:
$$\frac{P_n(t+\Delta t) - P_n(t)}{\Delta t} = -(\lambda + \mu)P_n(t) + \lambda P_{n-1}(t) + \mu P_{n+1}(t)$$

Take the limit as $\Delta t \to 0$. The left side becomes the derivative $\frac{dP_n(t)}{dt}$.
In the **Steady State**, probabilities are constant, so $\frac{dP_n(t)}{dt} = 0$. Let $P_n(t) = P_n$.

$$0 = -(\lambda + \mu)P_n + \lambda P_{n-1} + \mu P_{n+1}$$
$$(\lambda + \mu)P_n = \lambda P_{n-1} + \mu P_{n+1}$$

This represents the global balance equations. It implies that the rate of entering state $n$ equals the rate of leaving state $n$. It simplifies to the local balance equation (Rate Up = Rate Down):
$$\lambda P_n = \mu P_{n+1}$$
$$P_{n+1} = \frac{\lambda}{\mu} P_n = \rho P_n$$

### 3. Explicit Expression for $P_n$

From the recurrence relation $P_{n+1} = \rho P_n$, we can see this is a geometric sequence:
$$P_n = \rho^n P_0$$

Using the normalization condition that the sum of all probabilities is 1:
$$\sum_{n=0}^{\infty} P_n = \sum_{n=0}^{\infty} \rho^n P_0 = P_0 \sum_{n=0}^{\infty} \rho^n = 1$$

Using the geometric series sum formula (assuming $\rho < 1$ for stability):
$$P_0 \cdot \frac{1}{1-\rho} = 1 \implies P_0 = 1 - \rho$$

Substituting back:
$$P_n = (1 - \rho)\rho^n$$

### 4. Average Number of Requests ($L$)

$$L = E[n] = \sum_{n=0}^{\infty} n P_n = \sum_{n=0}^{\infty} n (1-\rho)\rho^n$$
$$L = (1-\rho) \sum_{n=0}^{\infty} n \rho^n$$

Using the given hint $\sum_{n=0}^{\infty} n x^n = \frac{x}{(1-x)^2}$ with $x = \rho$:
$$L = (1-\rho) \cdot \frac{\rho}{(1-\rho)^2}$$
$$L = \frac{\rho}{1 - \rho}$$

### 5. Average Waiting Time ($W$)

Using **Little's Law**: $L = \lambda W$.

$$W = \frac{L}{\lambda} = \frac{1}{\lambda} \cdot \frac{\rho}{1-\rho}$$

Since $\rho = \lambda / \mu$:
$$W = \frac{1}{\lambda} \cdot \frac{\lambda/\mu}{1 - \lambda/\mu} = \frac{1}{\lambda} \cdot \frac{\lambda}{\mu - \lambda}$$
$$W = \frac{1}{\mu - \lambda}$$

### 6. Behavior when $\rho \to 1$

As $\rho \to 1$ (which means $\lambda \to \mu$):
$$W = \frac{1}{\mu(1-\rho)}$$

The denominator approaches 0. Therefore, **$W \to \infty$**.
This implies that as the arrival rate approaches the service capacity, the average time a request spends in the system grows asymptotically to infinity (the system becomes unstable).

### 7. Cost Calculation (Current State)

Parameters:
- $\mu = 10$
- $\lambda = 8$
- $C_s = 10$
- $C_d = 5$

Calculate $\rho$ and $L$:
$$\rho = \frac{8}{10} = 0.8$$
$$L = \frac{0.8}{1 - 0.8} = \frac{0.8}{0.2} = 4$$

Calculate Total Cost:
$$Cost_{current} = C_s + L \times C_d = 10 + 4 \times 5 = 10 + 20 = 30$$

**The current total cost is 30.**

### 8. Enhancement Evaluation

New Parameters:
- $\mu' = 12$
- $\lambda = 8$ (unchanged)
- $C_s' = 15$
- $C_d = 5$ (unchanged)

Calculate new $\rho'$ and $L'$:
$$\rho' = \frac{8}{12} = \frac{2}{3}$$
$$L' = \frac{2/3}{1 - 2/3} = \frac{2/3}{1/3} = 2$$

Calculate New Total Cost:
$$Cost_{new} = C_s' + L' \times C_d = 15 + 2 \times 5 = 15 + 10 = 25$$

**Comparison:**
- Original Cost: 30
- New Cost: 25

**Conclusion:**
Since $25 < 30$, the total cost is reduced.
Therefore, the enhancement is **economically rational**.