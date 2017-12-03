﻿#include <regex>
#include <optional>
#include <dbAnnotativeObjectPE.h>
#include "UpdateDimStyle.hpp"

namespace sstd {

	UpdateDimStyle::UpdateDimStyle() {

	}

	void UpdateDimStyle::load() {
		arx_add_main_command<UpdateDimStyle>();
	}

	namespace {
		class ThisState {
		public:
			std::map<std::wstring, AcDbObjectId ,std::less<>> $AllTextStyle;
			std::map<std::wstring, AcDbObjectId,std::less<>> $AllBlockStyle;
			
			using RT = std::optional<AcDbObjectId>;

			inline RT getTextStyle(const std::wstring_view &arg) const {
				auto varPos = $AllTextStyle.find( arg );
				if (varPos!= $AllTextStyle.end()) {
					return  varPos->second ;
				}
				return {};
			}

			inline RT getBlock(const std::wstring_view &arg) const{
				auto varPos = $AllBlockStyle.find(arg);
				if (varPos != $AllBlockStyle.end()) {
					return  varPos->second;
				}
				return {};
			}

		};

		using StyleTable = AcDbDimStyleTable;
		using StyleTableRecord = AcDbDimStyleTableRecord;
		using StyleTableIterator = AcDbDimStyleTableIterator;
#define simple_code_args const std::wstring_view & argNM,StyleTable * argTST,StyleTableRecord * argR
		using ApplyLayerType = void(*)(simple_code_args, 
			StyleTableRecord *, StyleTableRecord *,
			StyleTableRecord *, StyleTableRecord *,
			ThisState*);
		using ApplyMaps = std::map<std::wstring_view, std::pair<ApplyLayerType, bool> >;
				
		inline auto setAnnotative(
			AcDbObject* argObject,
			bool argIsAnnotative) {
			AcDbAnnotativeObjectPE * varAnnoPE = ACRX_PE_PTR(
				argObject,
				AcDbAnnotativeObjectPE);
			if (varAnnoPE == nullptr) {
				return Acad::eNullPtr;
			}

			if (varAnnoPE->annotative(argObject) == argIsAnnotative) {
				return Acad::eOk;
			}

			return varAnnoPE->setAnnotative(argObject,
				argIsAnnotative);
		}

		inline void/*线型标注*/_linear_child(simple_code_args, StyleTableRecord *argC) {
			std::wstring varName{ argNM.begin(),argNM.end() };
			varName += LR"($0)"sv;

			sstd::ArxClosePointer<StyleTableRecord> varLocalR;
			if (argC == nullptr) {
				argC = new StyleTableRecord;
				varLocalR = argC;
				argTST->add(argC);
			}

			/*复制父项设置*/
			argC->copyFrom(argR);
			argC->setName(varName.data());

			argC->setDimasz(3.1);/*箭头长度*/

		}
		inline void/*角度标注*/_angular_child(simple_code_args, StyleTableRecord *argC) {
			std::wstring varName{ argNM.begin(),argNM.end() };
			varName += LR"($2)"sv;

			sstd::ArxClosePointer<StyleTableRecord> varLocalR;
			if (argC == nullptr) {
				argC = new StyleTableRecord;
				varLocalR = argC;
				argTST->add(argC);
			}

			/*复制父项设置*/
			argC->copyFrom(argR);
			argC->setName(varName.data());

			argC->setDimasz(3.2);/*箭头长度*/

		}
		inline void/*直径标注*/_diameter_child(simple_code_args, StyleTableRecord *argC) {
			std::wstring varName{ argNM.begin(),argNM.end() };
			varName += LR"($3)"sv;

			sstd::ArxClosePointer<StyleTableRecord> varLocalR;
			if (argC == nullptr) {
				argC = new StyleTableRecord;
				varLocalR = argC;
				argTST->add(argC);
			}

			/*复制父项设置*/
			argC->copyFrom(argR);
			argC->setName(varName.data());

			argC->setDimasz(3.3);/*箭头长度*/

		}

		inline void/*半径标注*/_radius_child(simple_code_args, StyleTableRecord *argC) {
			std::wstring varName{ argNM.begin(),argNM.end() };
			varName += LR"($4)"sv;

			sstd::ArxClosePointer<StyleTableRecord> varLocalR;
			if (argC == nullptr) {
				argC = new StyleTableRecord;
				varLocalR = argC;
				argTST->add(argC);
			}

			/*复制父项设置*/
			argC->copyFrom(argR);
			argC->setName(varName.data());

			argC->setDimasz(3.6);/*箭头长度*/

		}

		inline AcCmColor operator""_ac(unsigned long long arg) {
			AcCmColor varAns;
			varAns.setColorIndex( static_cast<std::uint16_t>(arg) );
			return std::move(varAns);
		}

		inline ApplyMaps _p_createFunctions() {
			ApplyMaps varAns;
			varAns.emplace(LR"(默认公差)", ApplyMaps::value_type::second_type{
				[](simple_code_args,
				StyleTableRecord * arg0,StyleTableRecord * arg2,
				StyleTableRecord * arg3,StyleTableRecord * arg4,
				ThisState * argGl) {
/******************************************************************/
				sstd::ArxClosePointer<StyleTableRecord> varLocalR;
				if (argR == nullptr) {
					argR = new StyleTableRecord;
					varLocalR = argR;
					argR->setName(argNM.data());
					argTST->add(argR);
				}

				/*线*******************************/
				{
					argR->setDimclrd(102_ac)/*尺寸线颜色*/;
					argR->setDimclre(102_ac)/*尺寸界限颜色*/;
					argR->setDimdli(7.0)/*基线间距*/;
					argR->setDimexe(2.0)/*尺寸界限超出尺寸线距离*/;
				}
				/*符号和箭头***********************/
				{
					constexpr const auto varRowInit = LR"(_MY_ROW)"sv;
					const auto varRowType = argGl->getBlock(varRowInit);
					argR->setDimblk1( varRowType ? varRowInit.data() : LR"()" )/*第一个箭头*/;
					argR->setDimblk2( varRowType ? varRowInit.data() : LR"()")/*第二个箭头*/;
					argR->setDimasz(4.6)/*箭头长度*/;
				}
				/*文字****************************/
				{
					const auto varTextType = argGl->getTextStyle(LR"(@Standard)");
					if (varTextType) { argR->setDimtxsty(*varTextType); }
					argR->setDimclrt( 111_ac );
					argR->setDimtfill(2)/*0 = No Background Fill color
                                          1 = Use background fill color from dimtfillclr()
                                          2 = Use drawing's background color*/;
					argR->setDimtad(1)/*0  标注文字在尺寸界线之间居中放置。
                                        1  除非尺寸线不是水平放置的或者尺寸界线内的文字被强制为水平放置 (DIMTIH = 1)，否则就将标注文字放置在尺寸线的上方。标注文字最底部基线到尺寸线的距离值就是系统变量DIMGAP 的当前值。
                                        2  将标注文字放在尺寸线远离定义点的一边。
                                        3  将标注文字按照日本工业标准 (JIS) 放置。*/;
					argR->setDimjust(0)/*0  将文字置于尺寸线之上，并在尺寸界线之间置中对正
                                        1  紧邻第一条尺寸界线放置标注文字
                                        2  紧邻第二条尺寸界线放置标注文字
                                        3  将标注文字放在第一条尺寸界线以上，并与之对齐
                                        4  将标注文字放在第二条尺寸界线以上，并与之对齐*/;
				}
				/*调整****************************/
				{
					setAnnotative(argR, true)/*注释性*/;
				}
				/*主单位**************************/
				{
					setAnnotative(argR, true)/*注释性*/;
				}
				/*换算单位*/
				{
				}
				/*公差*/
				{
				}
				
/******************************************************************/

				_linear_child(argNM, argTST,argR,arg0);
				_angular_child(argNM, argTST,argR,arg2);
				_diameter_child(argNM, argTST,argR,arg3);
				_radius_child(argNM, argTST,argR,arg4);

			},false });
			return std::move(varAns);
		}

		inline std::unique_ptr<ThisState> _p_get_state(AcDbDatabase * argDB) {
			std::unique_ptr<ThisState> varAns{new ThisState };

			/*获得所有文字样式的ID*/
			{
				sstd::ArxClosePointer< AcDbTextStyleTable > varT;
				std::unique_ptr< AcDbTextStyleTableIterator > varI;
				argDB->getTextStyleTable(varT);
				{
					AcDbTextStyleTableIterator * varTmp;
					varT->newIterator(varTmp);
					varI.reset(varTmp);
				}
				for (;!varI->done();varI->step()) {
					const wchar_t * varTN=nullptr;
					sstd::ArxClosePointer< AcDbTextStyleTableRecord > varR;
					varI->getRecord(varR);
					varR->getName(varTN);
					varAns->$AllTextStyle.emplace(varTN , varR->objectId() );
				}
			}

			/*获得所有块的ID*/
			{
				sstd::ArxClosePointer< AcDbBlockTable > varT;
				std::unique_ptr< AcDbBlockTableIterator > varI;
				argDB->getBlockTable(varT);
				{
					AcDbBlockTableIterator * varTmp;
					varT->newIterator(varTmp);
					varI.reset(varTmp);
				}
				for (; !varI->done(); varI->step()) {
					const wchar_t * varTN = nullptr;
					sstd::ArxClosePointer< AcDbBlockTableRecord > varR;
					varI->getRecord(varR);
					varR->getName(varTN);
					varAns->$AllTextStyle.emplace(varTN, varR->objectId());
				}
			}

			return std::move(varAns);
		}

		inline void _p_update_dim_style(AcDbDatabase * argDB) {

			sstd::ArxClosePointer< StyleTable > varDimStyleTable;
			if (Acad::eOk != argDB->getDimStyleTable(varDimStyleTable, AcDb::kForWrite)) {
				acutPrintf(LR"(获得文字样式失败
)"); return;
			}

			std::unique_ptr<ThisState> varThisState = _p_get_state(argDB);
			auto varFunctions = _p_createFunctions();
			const auto varNoPos = varFunctions.end();

			/*处理已经存在的文字样式*/
			class Item {
			public:
				sstd::ArxClosePointer<StyleTableRecord> r;
			};
			std::map< std::wstring, std::shared_ptr<Item> >
				varAllStyleTableRecord;
			{
				std::unique_ptr<StyleTableIterator> varIt;
				{
					StyleTableIterator * var = nullptr;
					if (Acad::eOk != varDimStyleTable->newIterator(var)) {
						acutPrintf(LR"(迭代文字样式失败
)"); return;
					}
					varIt.reset(var);
				}

				for (; !varIt->done(); varIt->step()) {
					auto varDimStyleTableRecord = std::make_shared<Item>();
					if (Acad::eOk != varIt->getRecord(varDimStyleTableRecord->r, AcDb::kForWrite)) {
						continue;
					}
					const wchar_t * varDimStyleName = nullptr;
					if (Acad::eOk != varDimStyleTableRecord->r->getName(varDimStyleName)) {
						continue;
					}
					varAllStyleTableRecord.emplace(varDimStyleName,
						std::move(varDimStyleTableRecord));

				}

			}

			{
				const auto varNoPosx = varAllStyleTableRecord.end();
				const static std::wregex varRJ(LR"(.*\$[0234])");
				auto get_0 = [&varAllStyleTableRecord, &varNoPosx](const std::wstring &arg)
					->StyleTableRecord* {
					auto varPos = varAllStyleTableRecord.find(arg + LR"($0)");
					if (varPos == varNoPosx) { return nullptr; }
					return varPos->second->r.pointer();
				};
				auto get_2 = [&varAllStyleTableRecord, &varNoPosx](const std::wstring &arg)
					->StyleTableRecord* {
					auto varPos = varAllStyleTableRecord.find(arg + LR"($2)");
					if (varPos == varNoPosx) { return nullptr; }
					return varPos->second->r.pointer();
				};
				auto get_3 = [&varAllStyleTableRecord, &varNoPosx](const std::wstring &arg)
					->StyleTableRecord* {
					auto varPos = varAllStyleTableRecord.find(arg + LR"($3)");
					if (varPos == varNoPosx) { return nullptr; }
					return varPos->second->r.pointer();
				};
				auto get_4 = [&varAllStyleTableRecord, &varNoPosx](const std::wstring &arg)
					->StyleTableRecord* {
					auto varPos = varAllStyleTableRecord.find(arg + LR"($4)");
					if (varPos == varNoPosx) { return nullptr; }
					return varPos->second->r.pointer();
				};

				for (const auto & varII : varAllStyleTableRecord) {
					const auto & varDimStyleNameW = varII.first;
					if (std::regex_match(varDimStyleNameW, varRJ)) {
						continue;
					}

					auto varPos = varFunctions.find(varDimStyleNameW);
					if (varPos == varNoPos) { continue; }
					varPos->second.second = true;
					varPos->second.first(varDimStyleNameW,
						varDimStyleTable,
						varII.second->r,
						get_0(varDimStyleNameW),
						get_2(varDimStyleNameW),
						get_3(varDimStyleNameW),
						get_4(varDimStyleNameW),
						varThisState.get());
				}

			}

			/*close opened record*/
			varAllStyleTableRecord.clear();

			/*新增文字样式*/
			{
				for (auto & varI : varFunctions) {
					if (varI.second.second) { continue; }
					varI.second.second = true;
					varI.second.first(varI.first,
						varDimStyleTable,
						nullptr,
						nullptr,
						nullptr,
						nullptr,
						nullptr,
						varThisState.get());
				}
			}

		}

	}/*namespace*/

	void UpdateDimStyle::main() {
		_p_update_dim_style(acdbHostApplicationServices()->workingDatabase());
	}

	extern void loadUpdateDimStyle() { UpdateDimStyle::load(); }

}/*namespace sstd*/
