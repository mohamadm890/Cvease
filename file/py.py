
from openpyxl import load_workbook

try:
    # Load the workbook
    sample = load_workbook(filename="name.xlsx")
    
    # Disable protection on all sheets
    for sheet in sample:
        sheet.protection.disable()

    # Save the changes
    sample.save(filename="sample.xlsx")
    
    # Close the workbook
    sample.close()

except Exception as e:
    print("An error occurred:", e)
