"use client";

import React, { useState } from "react";
import { honeyFactoryAbi } from "@bera/berajs";
import { honeyFactoryAddress } from "@bera/config";
import {
  ApproveButton,
  ConnectButton,
  FormattedNumber,
  SSRSpinner,
  TokenInput,
} from "@bera/shared-ui";
import { Alert, AlertDescription, AlertTitle } from "@bera/ui/alert";
import { Button } from "@bera/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@bera/ui/card";
import { Icons } from "@bera/ui/icons";
import { Skeleton } from "@bera/ui/skeleton";
import { Tabs, TabsList, TabsTrigger } from "@bera/ui/tabs";
import { Address, parseUnits } from "viem";

import { usePsm } from "~/hooks/usePsm";

export function SwapCard() {
  const [tabValue, setTabValue] = useState<"mint" | "burn">("mint");
  const {
    fee,
    isFeeLoading,
    payload,
    isReady,
    isLoading,
    selectedFrom,
    selectedTo,
    fromAmount,
    toAmount,
    isMint,
    fromBalance,
    toBalance,
    ModalPortal,
    honey,
    collateralList,
    needsApproval,
    exceedBalance,
    isTyping,
    isBadCollateral,
    isBasketModeEnabled,
    collateralWeights,
    setSelectedFrom,
    setSelectedTo,
    write,
    setFromAmount,
    setToAmount,
    setIsTyping,
    setGivenIn,
    setChangedAsset,
    onSwitch,
    refreshAllowances,
  } = usePsm();

  const resetFromAmounts = () => {
    const newAmounts: Record<Address, string> = {};
    Object.keys(fromAmount).forEach((key) => {
      newAmounts[key as Address] = "0";
    });
    setFromAmount(newAmounts);
  };

  const resetToAmounts = () => {
    const newAmounts: Record<Address, string> = {};
    Object.keys(toAmount).forEach((key) => {
      newAmounts[key as Address] = "0";
    });
    setToAmount(newAmounts);
  };

  return (
    <div className="w-full">
      <Card className="relative z-10 m-auto block w-full max-w-[500px] bg-background shadow-2xl">
        {ModalPortal}
        <CardHeader className="pb-3">
          <CardTitle>
            <span>{isMint ? "Mint" : "Redeem"}</span>
            {isFeeLoading ? (
              <Skeleton className="absolute right-6 top-5 h-6 w-40" />
            ) : (
              <div className="absolute right-6 top-5 text-base font-medium text-muted-foreground">
                Static fee of <FormattedNumber value={fee ?? 0} percent />
              </div>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={tabValue} value={tabValue} className="mb-3">
            <TabsList className="w-full">
              <TabsTrigger
                value={"mint"}
                className="flex-1 capitalize"
                onClick={() => {
                  setTabValue("mint");
                  if (!isMint) onSwitch();
                }}
              >
                Mint
              </TabsTrigger>
              <TabsTrigger
                value={"burn"}
                className="flex-1 capitalize"
                onClick={() => {
                  setTabValue("burn");
                  if (isMint) onSwitch();
                }}
              >
                Redeem
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="border-1 flex flex-col gap-6 border-border">
            <ul className="relative rounded-2xl border">
              <TokenInput
                selected={selectedFrom?.[0]}
                selectedTokens={
                  isBasketModeEnabled ? selectedFrom : [selectedFrom?.[0]]
                }
                onTokenSelection={(token) => {
                  resetFromAmounts();
                  resetToAmounts();
                  setSelectedFrom((prevToken) =>
                    token && prevToken
                      ? [
                          token,
                          ...prevToken.filter(
                            (t) => t.address !== token.address,
                          ),
                        ]
                      : [],
                  );
                }}
                amount={fromAmount[selectedFrom?.[0]?.address!]}
                balance={fromBalance?.[0]}
                selectable={selectedFrom?.[0]?.address !== honey?.address}
                customTokenList={collateralList}
                showExceeding
                setIsTyping={setIsTyping}
                setAmount={(amount) => {
                  setChangedAsset(selectedFrom?.[0]?.address);
                  setGivenIn(true);
                  setFromAmount((prevAmount) => ({
                    ...prevAmount,
                    [selectedFrom?.[0]?.address!]: amount,
                  }));
                }}
              />
              <hr />
              {!!isBasketModeEnabled && tabValue === "mint" && (
                <>
                  <TokenInput
                    selected={selectedFrom?.[1]}
                    selectedTokens={selectedFrom}
                    onTokenSelection={(token) => {
                      resetFromAmounts();
                      resetToAmounts();
                      setSelectedFrom((prevToken) =>
                        token && prevToken
                          ? [
                              token,
                              ...prevToken.filter(
                                (t) => t.address !== token.address,
                              ),
                            ]
                          : [],
                      );
                    }}
                    amount={fromAmount[selectedFrom?.[1]?.address!]}
                    balance={fromBalance?.[1]}
                    selectable={selectedFrom?.[1]?.address !== honey?.address}
                    customTokenList={collateralList}
                    showExceeding
                    setIsTyping={setIsTyping}
                    setAmount={(amount) => {
                      setChangedAsset(selectedFrom?.[1]?.address);
                      setGivenIn(true);
                      setFromAmount((prevAmount) => ({
                        ...prevAmount,
                        [selectedFrom?.[1]?.address!]: amount,
                      }));
                    }}
                  />
                  <hr />
                </>
              )}
              {(isLoading || isTyping) && (
                <SSRSpinner className="absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] rounded-md border border-border bg-background p-2" />
              )}
              <TokenInput
                selected={selectedTo?.[0]}
                selectedTokens={
                  isBasketModeEnabled ? selectedTo : [selectedTo?.[0]]
                }
                setIsTyping={setIsTyping}
                amount={toAmount[selectedTo?.[0]?.address!]}
                setAmount={(amount) => {
                  setChangedAsset(selectedTo?.[0]?.address);
                  setGivenIn(false);
                  setToAmount((prevAmount) => ({
                    ...prevAmount,
                    [selectedTo?.[0]?.address!]: amount,
                  }));
                }}
                selectable={selectedTo?.[0]?.address !== honey?.address}
                customTokenList={collateralList}
                showExceeding={false}
                hideMax={true}
                balance={toBalance?.[0]}
                onTokenSelection={(token) => {
                  resetFromAmounts();
                  resetToAmounts();
                  setSelectedTo((prevToken) =>
                    token && prevToken
                      ? [
                          token,
                          ...prevToken.filter(
                            (t) => t.address !== token.address,
                          ),
                        ]
                      : [],
                  );
                }}
              />
              {!!isBasketModeEnabled && tabValue === "burn" && (
                <>
                  <hr />
                  <TokenInput
                    selected={selectedTo?.[1]}
                    selectedTokens={selectedTo}
                    onTokenSelection={(token) => {
                      resetFromAmounts();
                      resetToAmounts();
                      setSelectedTo((prevToken) =>
                        token && prevToken
                          ? [
                              token,
                              ...prevToken.filter(
                                (t) => t.address !== token.address,
                              ),
                            ]
                          : [],
                      );
                    }}
                    amount={toAmount[selectedTo?.[1]?.address!]}
                    balance={toBalance?.[1]}
                    selectable={selectedTo?.[1]?.address !== honey?.address}
                    customTokenList={collateralList}
                    showExceeding
                    setIsTyping={setIsTyping}
                    setAmount={(amount) => {
                      setChangedAsset(selectedTo?.[1]?.address);
                      setGivenIn(false);
                      setToAmount((prevAmount) => ({
                        ...prevAmount,
                        [selectedTo?.[1]?.address!]: amount,
                      }));
                    }}
                  />
                </>
              )}
            </ul>
            {isBadCollateral && !isBasketModeEnabled ? (
              <Alert variant="default" className="flex gap-2">
                <Icons.info className="text-default-foreground h-4 w-4 flex-shrink-0" />
                <div>
                  <AlertTitle className="text-destructive-foreground">
                    Selected token disabled
                  </AlertTitle>
                  <AlertDescription className="text-sm text-muted-foreground">
                    Selected token is currently disabled
                  </AlertDescription>
                </div>
              </Alert>
            ) : isBasketModeEnabled ? (
              <Alert variant="default" className="flex gap-2">
                <Icons.info className="text-default-foreground h-4 w-4 flex-shrink-0" />
                <div>
                  <AlertTitle className="text-destructive-foreground">
                    Minting is currently restricted to preset pairs
                  </AlertTitle>
                  <AlertDescription className="text-sm text-muted-foreground">
                    Restrictions in effect due to price volatility.
                  </AlertDescription>
                </div>
              </Alert>
            ) : null}
            {!isReady ? (
              <ConnectButton className="w-full" />
            ) : needsApproval.length > 0 &&
              !exceedBalance?.some((item) => item) ? (
              <ApproveButton
                token={needsApproval[0]}
                spender={honeyFactoryAddress}
                amount={parseUnits(
                  needsApproval[0].amount.toString() ?? "0",
                  needsApproval[0].decimals ?? 18,
                )}
                onApproval={() => refreshAllowances()}
              />
            ) : (
              <Button
                disabled={
                  isLoading ||
                  Object.values(fromAmount).every((item) => item === "0") ||
                  Object.values(toAmount).every((item) => item === "0") ||
                  exceedBalance?.some((item) => item) ||
                  isTyping ||
                  (!isBasketModeEnabled && isBadCollateral) ||
                  !payload
                }
                onClick={() => {
                  write({
                    address: honeyFactoryAddress,
                    abi: honeyFactoryAbi,
                    functionName: isMint ? "mint" : "redeem",
                    params: payload!,
                  });
                }}
              >
                {isMint ? "Mint" : "Redeem"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
