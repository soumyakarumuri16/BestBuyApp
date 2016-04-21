/*-------------------------------------------------------------------------------------------------
--- Name      : stores.js
--- Author    : Soumya Karumuri
--- Date      : 05/07/2015
--- Purpose   : This module has functions related to the implementation of stores functionality  
-------------------------------------------------------------------------------------------------*/

/*-------------------------------------------------------------------------------------------------
--- Name 	    : onClickSearchStores() 
--- Author   	: Soumya Karumuri
--- Date      	: 05/07/2015
--- Purpose  	: This method is invoked when the search button on the stores screen is clicked	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/

function onClickSearchStores()
{
	if(frmStores.tbxSearch.text)
	{
		fetchLocationData();
	}
	else
	{
		frmStores.tbxSearch.text = "";
		alert("Please enter a city name or region code to search");
	}
}

/*-------------------------------------------------------------------------------------------------
--- Name 	    : fetchLocationData() 
--- Author   	: Soumya Karumuri
--- Date      	: 05/07/2015
--- Purpose  	: This method populates location data into stores screen 	
--- Input     	: none
--- Return   	: none
--------------------------------------------------------------------------------------------------*/

function fetchLocationData()
{
	var lSearchCriteria = "";
	if(frmStores.tbxSearch.text.length == 2)
	{
		lSearchCriteria = "region="+frmStores.tbxSearch.text;
	}
	else if(frmStores.tbxSearch.text.length > 2)
	{
		lSearchCriteria = "city="+frmStores.tbxSearch.text;
	}
	kony.application.showLoadingScreen(sknLoading,kony.i18n.getLocalizedString("PLEASE_WAIT"),constants.LOADING_SCREEN_POSITION_FULL_SCREEN,true,false,null);
	var lLocation_inputparam = {};
	lLocation_inputparam["serviceID"] = "FecthStoresData";
	lLocation_inputparam["key"] = gAppData.apiKey;
	lLocation_inputparam["searchCriteria"] = lSearchCriteria;
	lLocation_inputparam["httpheaders"] = {};
	lLocation_inputparam["httpconfigs"] = {};
	var lLocations = appmiddlewaresecureinvokerasync(lLocation_inputparam,fetchLocationData_callback);
}

function fetchLocationData_callback(pStatus,pResultSet)
{
	if(pStatus == 400)
	{
		kony.print("LOG : fetchLocationData_callback - pResultSet:");
		kony.print(pResultSet);
		if(pResultSet != null && pResultSet["opstatus"] == 0)
		{
			if(pResultSet["stores"] && pResultSet["stores"].length)
			{
				var lStoresData = [];
				var lStoreObj = {};
				frmStores.mapStores.widgetDataMapForCallout = {
				lblStoreName:"storeName",
				imgStoreIcon:"storeIcon",
				lblStoreAddress:"storeAddress",
				lblStoreHours:"storeHours"
				};
				for(var i=0;i < pResultSet["stores"].length;i++)
				{
					lStoreObj = {
					lat:pResultSet["stores"][i]["lat"],
					lon:pResultSet["stores"][i]["lng"],
					name:pResultSet["stores"][i]["name"],
					desc:pResultSet["stores"][i]["address"],
					image:"iconpin.png",
					showcallout:true,
					calloutData:{storeName:pResultSet["stores"][i]["name"],storeIcon:"iconstore.png",storeAddress:pResultSet["stores"][i]["address"],storeHours:pResultSet["stores"][i]["hours"]},
					meta:{color:"red"}
					};
					lStoresData.push(lStoreObj);
				}
				frmStores.tbxSearch.text = "";
				kony.print("LOG : fetchLocationData_callback - lStoresData:");
				kony.print(lStoresData);
				frmStores.mapStores.locationData = lStoresData;
				kony.application.dismissLoadingScreen();
			}
			else
			{
				kony.application.dismissLoadingScreen();
				frmStores.tbxSearch.text = "";
				if(frmStores.tbxSearch.text.length == 2)
				{
					alert("Best Buy stores are not available in this region");
				}
				else if(frmStores.tbxSearch.text.length > 2)
				{
					alert("Best Buy stores are not available in this city");
				}
			}
		}
		else
		{
			kony.application.dismissLoadingScreen();
			frmStores.tbxSearch.text = "";
			if(pResultSet["errmsg"])
			{
				alert(pResultSet["errmsg"]);
			}
			else
			{
				alert(kony.i18n.getLocalizedString("TECHNICAL_ISSUE"));
			}
		}
	}
}