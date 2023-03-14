import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function QueryBalance() {
  const [tokenID, setTokenID] = useState("");
  const [balanceInfo, setBalanceInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    queryBalance(1);
  }, []);


  const handleTokenIDChange = (event) => {
    setTokenID(event.target.value);
  };

  const queryBalance = () => {
    setIsLoading(true);
    const url = `https://cantov.onrender.com/TurnstileBalance/${tokenID}`;
    fetch(url)
      .then((response) => response.json())
      .then((balanceInfo) => {
        const balanceInfoStr = JSON.stringify(balanceInfo);
        setBalanceInfo(balanceInfoStr);
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="text-ctp-green">
        <input
          className="bg-ctp-crust text-ctp-pink"
          type="number"
          id="token-id-input"
          value={tokenID}
          onChange={handleTokenIDChange}
        />
        <div className="button mt-2">
          <button
            onClick={queryBalance}
            className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Check
          </button>
        </div>
        {isLoading ? (
          <div className="flex items-center justify-center mt-4">
            <FontAwesomeIcon icon={faSpinner} size="lg" pulse />
            <div className="ml-4">Loading...</div>
          </div>
        ) : (
          <div className="balance-info-wrapper mt-4">
            <div>
              <h2>$CANTO</h2>
            </div>
            <input
              type="text"
              className="bg-ctp-crust text-ctp-pink"
              id="balance-info"
              value={balanceInfo}
              readOnly
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default QueryBalance;
